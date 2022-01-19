import { prisma } from '../../db';

export const getAll = async () => {
  const result = await prisma.block.findMany();
  return result;
};
