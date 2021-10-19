import { Log } from '../components/TimeLine/Log/type';
import { contentsList } from './contentsStub';


const [C1, C2] = contentsList;
const timeLineStub: Log[] = [
  { id: 1, 
    contentsId: '1', 
    commitedAt: new Date(2021, 9, 15, 9, 31), 
    contentsName: C1.name, 
    blocks: C1.blocks.slice(0, 5) },
  { id: 2, 
    contentsId: '1', 
    commitedAt: new Date(2021, 9, 15, 11, 10), 
    contentsName: C1.name, 
    blocks: C1.blocks.slice(5, 10) },
  { id: 3, 
    contentsId: '2', 
    commitedAt: new Date(2021, 9, 18, 21, 10), 
    contentsName: C2.name, 
    blocks: C2.blocks.slice(2, 10) },
]; 

export { timeLineStub };
