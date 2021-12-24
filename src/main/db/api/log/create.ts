import { CreateLog } from '../../../../../custom';
import { prisma } from '../../db';

export const create: CreateLog = (
  markdown,
  html,
  blocks,
  tags,
  noteId,
  contentId
) => {
  const result = prisma.log.create({
    data: {
      markdown: markdown,
      html: html,
      tags: {
        connectOrCreate: [...tags.map(({ id, name }) => ({ where: { id: id }, create: { name: name } }))],
      },
      blocks: {
        connectOrCreate: [...blocks.map(({ id, unitNumber, level }) => ({ where: { id: id }, create: { unitNumber: unitNumber, level: level } }))],
      },
      note: {
        connect: { id: noteId }
      },
      content: {
        connect: { id: contentId },
      },
    },
  });

  return result;
};
