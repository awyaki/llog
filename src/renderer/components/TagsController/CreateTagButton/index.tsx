import { VFC, useContext } from 'react';

import { CSSObject } from '@emotion/react';

import {
  AddIcon,
  TagAnimationButtonWrapper,
} from '~/components';

import { SelectedTagsContext } from '../SelectedTagsContextProvider';

type Props = {
  css?: CSSObject;
};

export const CreateTagButton: VFC<Props> = ({ ...rest }) => {
  const { onOpenModalToCreateTag } = useContext(SelectedTagsContext);

  return (
    <TagAnimationButtonWrapper
      type="button"
      onClick={onOpenModalToCreateTag} {...rest}>
      <AddIcon />
    </TagAnimationButtonWrapper>
  );
};
