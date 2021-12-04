import { prisma } from '../../db';

export const getAll = async () => {
  const result = await prisma.content.findMany();
  return result;
};
