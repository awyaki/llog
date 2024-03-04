import { Content } from "@prisma/client";
import { prisma } from "../../db";

export const updateContentName = async ({
  id,
  name,
}: Pick<Content, "id" | "name">) => {
  const result = await prisma.content.update({
    where: { id: id },
    data: {
      name: name,
    },
  });

  return result;
};
