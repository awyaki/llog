import { VFC, useContext } from 'react';

import { EditSelectedTagsButton } from '../EditSelectedTagsButton';

import {
  container,
  tagStyle
} from './style';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

export const SelectedTagsList: VFC = () => {
  const { selectedTags } = useContext(SelectedTagsContext);
  return (
    <ul css={container}>
      {selectedTags.map(({ id, name }) => <li key={id}><div css={tagStyle}>{name}</div></li>)}
      <li><EditSelectedTagsButton /></li>
    </ul>
  );
};
