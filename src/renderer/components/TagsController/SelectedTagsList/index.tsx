import { VFC, useContext } from 'react';

import { CSSObject } from '@emotion/react';

import { EditSelectedTagsButton } from '../EditSelectedTagsButton';

import { CreateTagButton } from '../CreateTagButton';

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
    <div {...rest}>
      <ul css={tagsContainer}>
        <li><CreateTagButton /></li>
        <li><EditSelectedTagsButton /></li>
      </ul>
      <ul css={tagsContainer}>
        {selectedTags.map(({ id, name }) => <li key={id}><div css={tagStyle}>{name}</div></li>)}
      </ul>
    </div>
  );
};
