import { VFC, useContext } from 'react';

import { EditSearchedTagsButton } from '../EditSearchedTagsButton';

import {
  container,
  tagStyle
} from './style';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const SearchedTagsList: VFC = () => {
  const { searchedTags } = useContext(SelectedTagsContext);
  return (
    <ul css={container}>
      {searchedTags.map(({ id, name }) => <li key={id}><div css={tagStyle}>{name}</div></li>)}
      <li><EditSearchedTagsButton /></li>
    </ul>
  );
};
