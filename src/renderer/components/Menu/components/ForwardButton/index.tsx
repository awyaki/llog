import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  ForwardIcon,
  MenuButtonWrapper
  } from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const ForwardButton: VFC<Props> = ({ 
  onClick,
  ...rest
}) => {
  return (
    <MenuButtonWrapper 
      onClick={onClick}
    {...rest}>
      <ForwardIcon />
    </MenuButtonWrapper>
  );
};
