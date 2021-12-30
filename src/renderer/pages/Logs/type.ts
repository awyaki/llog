import { Log, BlockForLog, TagForLog } from '@prisma/client';

export type OnClickCommit = (
    markdown: string,
    html: string,
    blocks: BlockForLog[],
    tags: TagForLog[],
    contentName: string,
    noteId: number | null,
    contentId: number | null
  ) => Promise<void>;
