import { BlockType } from '../Block/type';

type ReviewType = {
  id: string;
  contentsName: string;
  blocks: BlockType[]; 
};

type Reviews = ReviewType[];

export type { Reviews };
