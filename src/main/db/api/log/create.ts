import { CreateLog } from '../../../../../custom';
import { prisma } from '../../db';

export const create: CreateLog = (
  markdown,
  html,
  blocks,
  tags,
  contentName,
  noteId,
  contentId
) => {
  const result = prisma.log.create({
    data: {
      markdown: markdown,
      html: html,
      tags: {
        connect: [...tags.map(({ id }) => ({ id: id }))],
      },
      blocks: {
        connect: [...blocks.map(({ id }) => ({ id: id }))],
      },
      note: {
        connect: { id: noteId }
      },
      contentName: contentName,
      content: {
        connect: { id: contentId },
      },
    },
  });

  return result;
};
