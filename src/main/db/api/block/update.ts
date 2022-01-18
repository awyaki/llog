import { Block } from '@prisma/client';

import { prisma } from '../../db';

export const update = async (block: Pick<Block, 'id' | 'iteration' | 'commitedAt' | 'level'>) => {
  const { id, iteration, commitedAt, level } = block;
  const result = await prisma.block.update({
    where: { id: id },
    data: {
      iteration: iteration,
      commitedAt: commitedAt,
      level: level,
    },
  });

  return result;
};
