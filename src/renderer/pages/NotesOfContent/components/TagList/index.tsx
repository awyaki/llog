import { VFC } from 'react';

import { Tag } from './components/Tag';

import { container } from './style/container';

type Props = {
  tags: { id: number, name: string }[];
};

export const TagList: VFC<Props> = ({ tags }) => {
  return (
    <ul css={container}>
      {tags.map(({ id, name }) => <li key={id}><Tag name={name}/></li>)}
    </ul>
  );
};
