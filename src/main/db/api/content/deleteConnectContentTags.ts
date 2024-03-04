import { prisma } from "../../db";

export const deleteConnectContentTags = async (id: number) => {
  const result = await prisma.content.update({
    where: { id: id },
    data: {
      tags: {
        set: [],
      },
    },
  });

  return result;
};
