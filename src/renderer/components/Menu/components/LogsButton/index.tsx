import { VFC } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  LogsIcon,
  MenuButtonWrapper
  } from '~/components';

type Props = {
  css?: CSSObject;
  onClick?: () => void;
};

export const LogsButton: VFC<Props> = ({ 
  onClick,
  ...rest
}) => {
  return (
    <MenuButtonWrapper 
      onClick={onClick}
    {...rest}>
      <LogsIcon />
    </MenuButtonWrapper>
  );
};
