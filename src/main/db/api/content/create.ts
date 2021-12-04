import { Tag, Block } from '@prisma/client';
import { prisma } from '../../db';

export const create = async (
  name: string,
  tags: Tag[], 
  blocks: Block[],
) => {
  const result = await prisma.content.create({
    data: {
      name: name,
      tags: {
        connect: [...tags.map(({ id }) => { return { id: id } })],
      },
      blocks: {
        create: [...blocks], 
      },
    },
  });
  return result;
};
