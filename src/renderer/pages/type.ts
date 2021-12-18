import { Prisma } from '@prisma/client';

const contentWithRelation = Prisma.validator<Prisma.ContentArgs>()({
  include: {
    blocks: true,
    notes: true,
    tags: true,
  },
});

const noteWithRelation = Prisma.validator<Prisma.NoteArgs>()({
  include: {
    blocks: true,
    tags: true,
  },
});

export type ContentWithRelation = Prisma.ContentGetPayload<typeof contentWithRelation>;

export type NoteWithRelation = Prisma.NoteGetPayload<typeof noteWithRelation>;
