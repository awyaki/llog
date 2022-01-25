import { VFC, useContext } from 'react';

import { EditSelectedTagsButton } from '../EditSelectedTagsButton';

import { CreateTagButton } from '../CreateTagButton';

import {
  tagsContainer,
  tagStyle
} from '../style';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const SelectedTagsList: VFC = () => {
  const { selectedTags } = useContext(SelectedTagsContext);
  return (
    <>
      <ul css={tagsContainer}>
        <li><CreateTagButton /></li>
        <li><EditSelectedTagsButton /></li>
      </ul>
      <ul css={tagsContainer}>
        {selectedTags.map(({ id, name }) => <li key={id}><div css={tagStyle}>{name}</div></li>)}
      </ul>
    </>
  );
};
