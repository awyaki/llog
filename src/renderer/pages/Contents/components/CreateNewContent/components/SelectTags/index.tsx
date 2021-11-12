import { VFC } from 'react';

import { container } from './style/container';
import { title } from './style/title';

import { SearchTagsBox } from './components/SearchTagsBox';
import { SelectedTagsList } from './components/SelectedTagsList';
import { TagsList } from './components/TagsList';
import { CreateTagButton } from './components/CreateTagButton';

export const SelectTags: VFC = () => {
  return (
    <div css={container}>
      <h2 css={title}>Tags</h2>
      <SearchTagsBox />
      <SelectedTagsList />
      <CreateTagButton />
      <TagsList />
    </div>
  );
};
