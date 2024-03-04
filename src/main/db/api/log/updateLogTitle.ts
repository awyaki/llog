import { Log } from "@prisma/client";
import { prisma } from "../../db";

export const updateLogTitle = async ({
  id,
  title,
}: Pick<Log, "id" | "title">) => {
  const result = await prisma.log.update({
    where: { id: id },
    data: {
      title: title,
    },
  });

  return result;
};
