import { BlockType, Level } from '../../../../Block/type';


/*
 * return precessed string of blocks level infomation
 *  
* */

const makeLevelInfoList = (blocks: BlockType[]): [string, string, string, string, string, string] => {

  const num = (n: Level) => blocks.filter((block) => block.level === n).length;

  const all = blocks.length;
  const ratio = (n: Level) => (num(n) * 100 / all).toFixed(1);
  
  const makeString = (n: Level) => `${num(n)}（${ratio(n)}％）`;

  return [makeString(0), makeString(1), makeString(2), makeString(3), makeString(4), makeString(5)];
};


export { makeLevelInfoList };

