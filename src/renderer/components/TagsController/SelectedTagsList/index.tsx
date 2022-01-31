import { VFC, useContext } from 'react';

import { CSSObject } from '@emotion/react';

import {
  tagsContainer,
  tagStyle
} from '../style';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

type Props = {
  css?: CSSObject;
};

export const SelectedTagsList: VFC<Props> = ({ ...rest }) => {
  const { selectedTags } = useContext(SelectedTagsContext);
  return (
    <ul css={tagsContainer} {...rest}>
      {selectedTags.map(({ id, name }) => <li key={id}><div css={tagStyle}>{name}</div></li>)}
    </ul>
  );
};
