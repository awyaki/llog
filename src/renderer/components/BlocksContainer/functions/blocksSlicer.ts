import { BlockType } from '../../Block/type';

const blocksSlicer = (blocks: BlockType[], n: number): (BlockType[])[] => {

  const subBlocksSlicer = (blocks: BlockType[], acc: (BlockType[])[]): (BlockType[])[] => {
    if (blocks.length === 0) return acc;
    const headBulk = blocks.slice(0, n);
    const tail = blocks.slice(n);
    return subBlocksSlicer(tail, acc.concat([headBulk]));
  };

  return subBlocksSlicer(blocks, []);
};

export { blocksSlicer };
