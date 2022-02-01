import { 
  VFC,
  useContext
  } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  TagAnimationButtonWrapper,
  EditIcon
  } from '~/components';

import {
  SelectTagsContext
} from '~/components';

type Props = {
  css?: CSSObject;
};

export const ExpandButton: VFC<Props> = ({ ...rest }) => {
  const { toggleIsOpen } = useContext(SelectTagsContext);

  return (
    <TagAnimationButtonWrapper 
      type="button"
      onClick={toggleIsOpen} {...rest}>
      <EditIcon />
    </TagAnimationButtonWrapper>
  );
};
