import { VFC } from 'react';

import { Tag as TagType } from '@prisma/client';

import { 
  OpenModalToUpdateContentTagsButton,
  CreateTagButton,
} from '~/components';

import { container } from './style/container';
import { Tag } from './components/Tag';

type Props = {
  tags: TagType[];
};

export const TagsList: VFC<Props> = ({ tags }) => {

  return (
    <ul css={container}>
      <li><CreateTagButton /></li>
      <li><OpenModalToUpdateContentTagsButton /></li>
      {tags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
    </ul>
  );
};
