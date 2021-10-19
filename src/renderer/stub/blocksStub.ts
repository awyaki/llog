import { random } from '../utils/functions';
import { BlockType, Level } from '../components/Block/type';


// idは全てのBlockで一意としたいのでmakeBlocks作成するクロージャを作成
const createMakeBlock = () => {

  const makeRandomLevel = (): Level  => {
    const val = random(0, 6);
    if (val === 0) return 0;
    if (val === 1) return 1;
    if (val === 2) return 2;
    if (val === 3) return 3;
    if (val === 4) return 4;
    if (val === 5) return 5;
    return 0;
  };

  const makeBlocks = (n: number): BlockType[] => {

    const helper = (n: number, unitNumber: number, rsf: BlockType[]): BlockType[] => {
      if (n === 0) return rsf;

      const block: BlockType = {
        id: '1',
        level: makeRandomLevel(),
        iteration: random(0, 5),
        unit: unitNumber,
        commitedAt: new Date(),
        createdAt: new Date(),
      };

      return helper(n - 1, unitNumber + 1, rsf.concat(block));
    };

    return helper(n, 1, []);
  };

  return makeBlocks;
};


const makeBlocksForContents1 = createMakeBlock();
const makeBlocksForContents2 = createMakeBlock();


const blocksForContents1 = makeBlocksForContents1(253);
const blocksForContents2 = makeBlocksForContents2(253);

export { blocksForContents1, blocksForContents2, createMakeBlock };
