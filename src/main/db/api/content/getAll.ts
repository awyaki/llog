import { prisma } from "../../db";

export const getAll = async () => {
  const result = await prisma.content.findMany({
    include: {
      tags: true,
      notes: true,
      blocks: true,
    },
  });
  return result;
};
