import { Tag } from '@prisma/client';


export type State = {
  tags: Tag[];
};

export type Action = {
  type: 'APP/CREATE_TAG',
  id: Tag['id'];
  name: Tag['name'];
}
