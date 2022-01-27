import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  HomeIcon,
  MenuButtonWrapper
  } from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const HomeButton: VFC<Props> = ({ 
  onClick,
  ...rest
}) => {
  return (
    <MenuButtonWrapper 
      onClick={onClick}
    {...rest}>
      <HomeIcon />
    </MenuButtonWrapper>
  );
};
