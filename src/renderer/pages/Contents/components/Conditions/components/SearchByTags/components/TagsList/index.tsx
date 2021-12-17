import { VFC, useContext } from 'react';

import { TagContext } from '~/DBContextProviders';

import { Tag } from './components/Tag';
import { tagsList } from './style/tagsList';

/*const tags = [
  { id: 1, name: 'Computer Science', isSelected: true },
  { id: 2, name: '計算機科学', isSelected: true },
  { id: 3, name: '神話', isSelected: false },
  { id: 4, name: '英語', isSelected: false },
  { id: 5, name: '現代文', isSelected: false },
  { id: 6, name: '競技プログラミング', isSelected: false },
  { id: 7, name: 'アルゴリズム', isSelected: false },
  { id: 8, name: 'アルゴリズム', isSelected: false },
  { id: 9, name: '分子生物学', isSelected: false },
];*/

export const TagsList: VFC = () => {
  const { tags } = useContext(TagContext);
  return (
    <ul css={tagsList}>
      {tags.map(({ id, name }) => <li key={id}><Tag name={name} isSelected={true}/></li>)}
    </ul>
  );
};
