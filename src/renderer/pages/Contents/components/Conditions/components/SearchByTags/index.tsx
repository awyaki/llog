import { VFC } from 'react';

import { title } from './style/title';
import { SearchTagsBox } from './components/SearchTagsBox';
import { SelectedTagsList } from './components/SelectedTagsList';
import { TagsList } from './components/TagsList';

export const SearchByTags: VFC = () => {
  return (
    <>
      <h2 css={title}>Tags</h2>
      <SearchTagsBox />
      <SelectedTagsList />
      <TagsList />
    </>
  );
};
