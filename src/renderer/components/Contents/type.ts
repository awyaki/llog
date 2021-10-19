import { BlockType } from '../Block/type';
import { Tag } from '../Tag/type';

type Contents = {
  id: string;
  name: string;
  createdAt: Date;
  tags: Tag[];
  commitedAt: Date;
  blocks: BlockType[]; 
};

export type { Contents };
