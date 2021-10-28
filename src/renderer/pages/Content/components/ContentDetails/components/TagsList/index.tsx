import { VFC } from 'react';

import { container } from './style/container';
import { Tag } from './components/Tag';

export const TagsList: VFC = () => {
  const tags = [
    { id: 1, name: 'Computer Science' },
    { id: 2, name: '計算機科学' }
  ];

  return (
    <ul css={container}>
      {tags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
    </ul>
  );
};
