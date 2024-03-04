import { prisma } from "../../db";

import { range } from "../../../utils";

export const upsertContentBlocks = async (
  id: number,
  blockMaxUnitNumber: number,
  howManyBlocks: number,
) => {
  const result = await prisma.content.update({
    where: { id: id },
    data: {
      blocks: {
        create: [...range(0, howManyBlocks)].map((_, i) => ({
          iteration: 0,
          level: 0,
          unitNumber: blockMaxUnitNumber + 1 + i,
        })),
      },
    },
  });

  return result;
};
