import { CreateLog } from '../../../../../custom';
import { prisma } from '../../db';

export const create: CreateLog = (
  markdown,
  html,
  blocks,
  tags,
  title,
  contentName,
  noteId,
  contentId
) => {
  const result = prisma.log.create({
    data: {
      markdown: markdown,
      html: html,
      title: title,
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
