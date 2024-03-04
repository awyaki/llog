import { prisma } from "../../db";

export const deleteContent = async (id: number) => {
  await prisma.log.deleteMany({
    where: { contentId: id },
  });

  await prisma.note.deleteMany({
    where: { contentId: id },
  });

  await prisma.block.deleteMany({
    where: { contentId: id },
  });

  const deletedContent = await prisma.content.delete({
    where: { id: id },
  });

  return deletedContent;
};
