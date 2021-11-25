import { prisma } from '../../db';

export const create = async (name: string) => {
  const result = await  prisma.tag.create({ data: { name: name }});

  return result;
};

