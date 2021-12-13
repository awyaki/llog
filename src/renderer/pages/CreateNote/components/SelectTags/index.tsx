import { VFC } from 'react';

import { Tag as TagType } from '@prisma/client';

import { container } from './style/container';

import { Tag } from './components/Tag'

type Props = {
  tags: TagType[];
};

export const SelectTags: VFC<Props> = ({ tags }) => {
  return (
    <ul css={container}>
      {tags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
    </ul>
  );
};
