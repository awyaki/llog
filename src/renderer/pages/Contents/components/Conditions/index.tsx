import { VFC } from 'react';

import { container } from './style/container';
import { SortByDate } from './components/SortByDate';
import { SearchByTags } from './components/SearchByTags';
import { SearchByKeywords } from './components/SearchByKeywords';

import { pageTitle } from '~/pages/style/pageTitle';

export const Conditions: VFC = () => {
  return (
    <div css={container}>
      <h1 css={pageTitle}>Conditions</h1>
      <SortByDate />
      <SearchByTags />
      <SearchByKeywords />
    </div>
  );
};
