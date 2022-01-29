import { VFC, MouseEventHandler } from 'react';

import { CSSObject } from '@emotion/react';

import { 
  DisabableButtonAnimationWrapper,
  SaveIcon,
  } from '~/components';

type Props = {
  css?: CSSObject;
  disabled: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>; 
};

export const SaveButton: VFC<Props> = ({ 
  onClick, 
  disabled,
  ...rest
}) => {
  return (
    <DisabableButtonAnimationWrapper 
      disabled={disabled}
      onClick={onClick} {...rest}> 
      <SaveIcon />
    </DisabableButtonAnimationWrapper>
  );
};
