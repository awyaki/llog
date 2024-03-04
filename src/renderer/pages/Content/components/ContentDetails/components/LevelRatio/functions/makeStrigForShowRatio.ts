import { Block } from "@prisma/client";

import { zip } from "~/utils";

import { numOfEveryLevel } from "./numOfEveryLevel";

const toPercentage = (n: number, m: number) => {
  return Math.floor((n * 100) / m);
};

export const makeStringForShowRatio = (blocks: Block[]) => {
  const all = blocks.length;
  const _numOfEveryLevel = numOfEveryLevel(blocks);
  const ratios = _numOfEveryLevel.map((n) => toPercentage(n, all));

  const strs = zip(_numOfEveryLevel, ratios).map(([n, r]) => {
    return `${n}（${r}％）`;
  });

  return strs;
};
