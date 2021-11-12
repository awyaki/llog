import { VFC } from 'react';

import { title } from './style/title';
import { container } from './style/container';

import { SearchTagsBox } from './components/SearchTagsBox';
import { SelectedTagsList } from './components/SelectedTagsList';
import { TagsList } from './components/TagsList';

export const SearchByTags: VFC = () => {
  return (
    <div css={container}>
      <h2 css={title}>Tags</h2>
      <SearchTagsBox />
      <SelectedTagsList />
      <TagsList />
    </div>
  );
};
