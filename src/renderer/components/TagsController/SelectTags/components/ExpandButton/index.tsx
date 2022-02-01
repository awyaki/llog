import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  TagAnimationButtonWrapper,
  EditIcon
  } from '~/components';

import { useSelectTags } from '~/components';

type Props = {
  css?: CSSObject;
};

export const ExpandButton: VFC<Props> = ({ ...rest }) => {
  const { toggleIsOpen } = useSelectTags();
  return (
    <TagAnimationButtonWrapper 
      type="button"
      onClick={toggleIsOpen} {...rest}>
      <EditIcon />
    </TagAnimationButtonWrapper>
  );
};
