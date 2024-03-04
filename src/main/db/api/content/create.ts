import { Tag } from "@prisma/client";
import { range } from "../../../utils";
import { prisma } from "../../db";

export const create = async (
  name: string,
  tags: Tag[],
  blocksNumber: number,
) => {
  const result = await prisma.content.create({
    data: {
      name: name,
      tags: {
        connect: [...tags.map(({ id }) => ({ id: id }))],
      },
      blocks: {
        create: [...range(0, blocksNumber)].map((n) => ({
          unitNumber: n + 1,
          level: 0,
          iteration: 0,
        })),
      },
    },
  });

  return result;
};
