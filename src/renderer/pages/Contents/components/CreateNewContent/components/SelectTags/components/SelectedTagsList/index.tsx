import { VFC } from 'react';

import { Tag } from './Tag';
import { tagsList } from './style/tagsList';

export const SelectedTagsList: VFC = () => {
  const tags = [{ id: 1, name: 'Computer Science' }, { id:  2, name: '計算機科学' }];

  return (
    <ul css={tagsList}>
      {tags.map(({ id, name }) => <li key={id}><Tag name={name} /></li>)}
    </ul>
  );
}; 
