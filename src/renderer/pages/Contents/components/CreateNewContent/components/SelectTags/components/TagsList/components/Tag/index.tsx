import { VFC, useContext } from 'react';

import { SelectedTagsContext } from '../../../../SelectedTagsContextProvider';

import { Tag as TTag } from '@prisma/client';

import { makeTagStyle } from './style/makeTagStyle';

type Props = {
  tag: TTag;
};

export const Tag: VFC<Props> = ({ tag }) => {
  const { selectedTags, toggleSelect } = useContext(SelectedTagsContext);
  const isSelected = selectedTags.some((t) => t.id === tag.id);
  
  return (
    <button css={makeTagStyle(isSelected)} onClick={() => toggleSelect(tag)}>
      {tag.name}
    </button>
  );
};
