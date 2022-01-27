import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  TagsIcon,
  MenuButtonWrapper
  } from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const TagsButton: VFC<Props> = ({ 
  onClick,
  ...rest
}) => {
  return (
    <MenuButtonWrapper 
      onClick={onClick}
    {...rest}>
      <TagsIcon />
    </MenuButtonWrapper>
  );
};
