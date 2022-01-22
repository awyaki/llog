import { VFC } from 'react';

import { Tag as TagType } from '@prisma/client';

import { OpenModalToUpdateContentTagsButton } from '~/components';

import { container } from './style/container';
import { Tag } from './components/Tag';

type Props = {
  tags: TagType[];
};

export const TagsList: VFC<Props> = ({ tags }) => {

  return (
    <ul css={container}>
      {tags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
      <li><OpenModalToUpdateContentTagsButton /></li>
    </ul>
  );
};
