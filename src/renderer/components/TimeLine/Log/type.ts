import { BlockType } from '../../Block/type';

type Log = {
  id: number;
  commitedAt: Date;
  contentsId: string;
  contentsName: string;
  blocks: BlockType[];
};

export type { Log };
