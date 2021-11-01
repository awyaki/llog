import { Block } from './types';
import { range } from '~/utils/range';

export const makeBlocks = (n: number): Block[] => {
  return [...range(0, n)].map((i) => {
    return {
      id: i,
      level: 3,
      unitNumber: i+1,
    };
  });
};
