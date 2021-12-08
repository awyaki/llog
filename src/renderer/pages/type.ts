import { Prisma } from '@prisma/client';

const contentWithRelation = Prisma.validator<Prisma.ContentArgs>()({
  include: {
    blocks: true,
    notes: true,
    tags: true,
  },
});

export type ContentWithRelation = Prisma.ContentGetPayload<typeof contentWithRelation>;
