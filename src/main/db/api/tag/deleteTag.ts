import { prisma } from "../../db";

export const deleteTag = async (id: number) => {
  const result = await prisma.tag.delete({
    where: { id: id },
  });

  return result;
};
