import { VFC, MouseEventHandler } from 'react';

import { container } from './style/container';
import { title } from './style/title';

import { SearchTagsBox } from './components/SearchTagsBox';
import { SelectedTagsList } from './components/SelectedTagsList';
import { TagsList } from './components/TagsList';
import { CreateTagButton } from './components/CreateTagButton';

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const SelectTags: VFC<Props> = ({ onClick }) => {
  return (
    <div css={container}>
      <h2 css={title}>Tags</h2>
      <SearchTagsBox />
      <SelectedTagsList />
      <CreateTagButton onClick={onClick} />
      <TagsList />
    </div>
  );
};
