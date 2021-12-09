import { prisma } from '../../db';

import { Tag, Block } from '@prisma/client';


export const create = async (
  mkd: string, 
  transformed: string,
  tags: Tag[], 
  blocks: Block[],
  contentId: number
) => {
    const note = await prisma.note.create({
      data: {
        origin: mkd,
        transformed: transformed,
        tags: {
          connect: [...tags.map(({ id }) => ({ id: id }))],
        },
        blocks: {
          connect: [...blocks.map(({ id }) => ({ id: id }))],
        },
        commitedAt: new Date(),
        content: {
          connect: { id: contentId },
        },
      },
    });

    return note;
};
