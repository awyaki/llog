import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  TagAnimationButtonWrapper,
  EditIcon
  } from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const ExpandButton: VFC<Props> = ({ onClick, ...rest }) => {
  return (
    <TagAnimationButtonWrapper 
      type="button"
      onClick={onClick} {...rest}>
      <EditIcon />
    </TagAnimationButtonWrapper>
  );
};
