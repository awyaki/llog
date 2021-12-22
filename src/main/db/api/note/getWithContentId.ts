import { prisma } from '../../db';

export const getWithContentId = async (contentId: number) => {
  const notes = await prisma.note.findMany({
    where: {
      contentId: contentId,
    },
    include: {
      tags: true,
      blocks: true,
    },
  });

  return notes;
};
