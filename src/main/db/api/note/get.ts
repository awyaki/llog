import { prisma } from '../../db';

export const get = async (id: number) => {
  const note = await prisma.note.findUnique({
    where: {
      id: id,
    },
    include: {
      tags: true,
      blocks: true,
    },
  });

  return note;
};
