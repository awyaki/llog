import { prisma } from '../../db';

export const getAll = async () => {
  const result = await prisma.tag.findMany();
  return result;
};
