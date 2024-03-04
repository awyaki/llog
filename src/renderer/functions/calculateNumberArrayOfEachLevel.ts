import { Block } from "@prisma/client";

export const calculateNumberArrayOfEachLevel = (blocks: Block[]) => {
  return blocks
    .map((block) => block.level)
    .reduce(
      (acc, cur) => {
        const [l0, l1, l2, l3, l4, l5] = acc;
        if (cur === 0) return [l0 + 1, l1, l2, l3, l4, l5];
        if (cur === 1) return [l0, l1 + 1, l2, l3, l4, l5];
        if (cur === 2) return [l0, l1, l2 + 1, l3, l4, l5];
        if (cur === 3) return [l0, l1, l2, l3 + 1, l4, l5];
        if (cur === 4) return [l0, l1, l2, l3, l4 + 1, l5];
        if (cur === 5) return [l0, l1, l2, l3, l4, l5 + 1];
        return acc;
      },
      [0, 0, 0, 0, 0, 0],
    );
};
