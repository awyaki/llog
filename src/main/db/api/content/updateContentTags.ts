import { Tag } from '@prisma/client';
import { prisma } from '../../db';

export const updateContentTags = async (
  id: number,
  tags: Tag[],
) => {
  const result = await prisma.content.update({
    where: { id: id },
    data: {
      tags: {
        connect: tags.map(({ id }) => ({ id })),
      },
    },
  });

  return result;
};
