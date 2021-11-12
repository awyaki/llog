import { VFC } from 'react';

import { container } from './style/container';

import { Tag } from './components/Tag';

type Props = {
  tags: { id: number, name: string }[];
};

export const TagList: VFC<Props> = ({ tags }) => {
  return (
    <ul css={container}>
      {tags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
    </ul>
  );
};
