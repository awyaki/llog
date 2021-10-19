import { Contents } from '../components/Contents/type';
import { blocksForContents1, blocksForContents2 } from './blocksStub';

const contents1: Contents = {
  id: '1',
  name: 'グノーシスの神話',
  tags: [{ id: '1', name: '神話' }],
  createdAt: new Date(),
  commitedAt: new Date(),
  blocks: blocksForContents1,
}; 


const contents2: Contents = {
  id: '2',
  name: '誰のためのデザイン？',
  tags: [{ id: '2', name: 'デザイン' }, {id: '3', name: '認知科学' }],
  createdAt: new Date(),
  commitedAt: new Date(),
  blocks: blocksForContents2,
}; 


const contentsList = [contents1, contents2];
export { contentsList };
