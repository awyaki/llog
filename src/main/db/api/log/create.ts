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
        create: [...tags.map(({ name }) => ({ name }))],
      },
      blocks: {
        create: [...blocks.map(({ unitNumber, level, iteration }) => ({ unitNumber, level, iteration: iteration + 1 }))],
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
