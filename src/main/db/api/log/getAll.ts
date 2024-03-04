import { prisma } from "../../db";

export const getAll = async () => {
  const result = await prisma.log.findMany({
    include: {
      tags: true,
      blocks: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};
