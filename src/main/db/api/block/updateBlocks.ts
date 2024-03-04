import { Block } from "@prisma/client";

import { update as updateBlock } from "./update";

/*
 * updateBlocks
 * @param {Array} blocks - new array of blocks
 * take array of blocks and update blocks data to the blocks which is passed as argument.
 **/

const asyncForeach = async <T>(
  array: T[],
  fn: (arg: T) => Promise<unknown>,
) => {
  array.reduce(async (acc, cur) => {
    return acc.then(() => {
      fn(cur);
    });
  }, Promise.resolve());
};

export const updateBlocks = async (
  blocks: Pick<Block, "id" | "iteration" | "commitedAt" | "level">[],
) => {
  await asyncForeach(blocks, updateBlock);
};
