import { VFC, useContext } from 'react';

import { Tag as TagType } from '@prisma/client';

import { SelectedTagsContext } from '../../../../SelectedTagsContextProvider';

import { makeContainer } from './style';

type Props = {
  tag: TagType;
};

export const Tag: VFC<Props> = ({ tag }) => {

  const { selectedTags, dispatch } = useContext(SelectedTagsContext);
  const isSelected = selectedTags.includes(tag);
  
  const handleToggleSelectedTag = () => {
    dispatch({ type: 'SELECTED_TAGS/TOGGLE', tag: tag });
  };

  return (
    <button onClick={handleToggleSelectedTag} css={makeContainer(isSelected)}>{tag.name}</button>
  );
};
