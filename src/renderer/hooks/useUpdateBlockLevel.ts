import { useEffect } from 'react';

import { asyncForEach } from '~/utils';

import { calculateLevel } from '~/functions';

import { 
  getAllBlock,
  updateBlock,
} from '~/api';


export const useUpdateBlockLevel = () => {
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const allBlocks = await getAllBlock();

      await asyncForEach(allBlocks, async (block) => {
        const { id, iteration, commitedAt } = block;

        if (commitedAt === null) return;
        await updateBlock({ id, iteration, commitedAt, level: calculateLevel(iteration, commitedAt)});
      });

      console.log(allBlocks);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, []);
};

