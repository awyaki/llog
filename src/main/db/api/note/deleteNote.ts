import { prisma } from '../../db';

export const deleteNote = (id: number) => {
  const result = prisma.note.delete({
    where: { id: id },
  });

  return result;
};
