import { BlockType } from '../Block/type';
import { Tag } from '../Tag/type'

type Note = {
  id: number;
  contentsId: number;
  contentsName: string;
  body: string;
  blocks: BlockType[];
  tags: Tag[];
  createdAt: Date;
  modifiedAt: Date;
};

export type { Note };
