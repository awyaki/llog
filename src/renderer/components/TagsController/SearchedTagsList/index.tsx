import { VFC, useContext } from 'react';

import { EditSearchedTagsButton } from '../EditSearchedTagsButton';

import { ReleaseSearchedTagsButton } from '../ReleaseSearchedTagsButton';

import {
  tagsContainer,
  tagStyle
} from '../style';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const SearchedTagsList: VFC = () => {
  const { searchedTags } = useContext(SelectedTagsContext);
  return (
    <>
      <ul css={tagsContainer}>
        <li><EditSearchedTagsButton /></li>
        <li><ReleaseSearchedTagsButton /></li>
      </ul>
      <ul css={tagsContainer}>
        {searchedTags.map(({ id, name }) => <li key={id}><div css={tagStyle}>{name}</div></li>)}
      </ul>
    </>
  );
};
