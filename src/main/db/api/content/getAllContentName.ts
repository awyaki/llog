import { prisma } from '../../db';

export const getAllContentName = async () => {
  const result = await prisma.content.findMany();

  return result.map(({ id, name }) => ({ id, contentName: name }));
};
