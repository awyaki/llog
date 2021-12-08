import { prisma } from '../../db';

export const get = async (id: number) => {
  const content = await prisma.content.findUnique({
    where: {
      id: id,
    },
  });

  return content;
};
