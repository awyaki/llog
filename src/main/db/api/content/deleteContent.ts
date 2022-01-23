import { prisma } from '../../db';

export const deleteContent = async (id: number) => {
  const result = await prisma.content.delete({
    where: { id: id }
  });

  return result;
};
