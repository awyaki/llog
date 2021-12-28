import { prisma } from '../../db';

export const get = async (id: number) => {
  const log = await prisma.log.findUnique({
    where: {
      id: id,
    },
    include: {
      tags: true,
      blocks: true,
    }
  });

  return log;
};
