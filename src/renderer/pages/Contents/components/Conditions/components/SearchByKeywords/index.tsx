import { VFC } from 'react';

import { SearchKeywordsBox } from './components/SearchKeywordsBox';
import { title } from './style/title';

export const SearchByKeywords: VFC = () => {
  return (
    <div>
      <h2 css={title}>Keywords</h2>
      <SearchKeywordsBox />
    </div>
  );
};
