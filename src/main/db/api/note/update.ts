import { prisma } from "../../db";

import { Tag, Block } from "@prisma/client";

export const update = async (
  id: number,
  markdown: string,
  html: string,
  tags: Tag[],
  blocks: Block[],
  contentId: number,
  commitedAt: Date | null,
  updatedAt: Date,
) => {
  const note = await prisma.note.update({
    where: { id: id },
    data: {
      origin: markdown,
      transformed: html,
      commitedAt: commitedAt,
      updatedAt: updatedAt,
      content: {
        connect: { id: contentId },
      },
      tags: {
        set: [],
        connect: [...tags.map(({ id }) => ({ id: id }))],
      },
      blocks: {
        set: [],
        connect: [...blocks.map(({ id }) => ({ id: id }))],
      },
    },
  });
  return note;
};
