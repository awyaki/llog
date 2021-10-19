import { random } from '../utils/functions';
import { Reviews } from '../components/Review/types'
import { contentsList } from './contentsStub';


const reviewsStub: Reviews = contentsList.map((contents) => {
  return {
    id: contents.id,
    contentsName: contents.name,
    blocks: contents.blocks.slice(0, random(10, 30)),
  };
});;

export { reviewsStub };
