import { Block, Tag } from "@prisma/client";

export type OnClickCommit = (
  markdown: string,
  html: string,
  blocks: Block[],
  tags: Tag[],
  contentName: string,
  noteId: number | null,
  contentId: number | null,
) => Promise<void>;
