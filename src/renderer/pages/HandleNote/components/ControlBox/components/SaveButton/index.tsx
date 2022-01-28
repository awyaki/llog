import { VFC, MouseEventHandler } from 'react';

import { 
  DisabableButtonAnimationWrapper,
  SaveIcon,
  } from '~/components';

type Props = {
  disabled: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>; 
};

export const SaveButton: VFC<Props> = ({ 
  onClick, 
  disabled
}) => {
  return (
    <DisabableButtonAnimationWrapper 
      disabled={disabled}
      onClick={onClick}> 
      <SaveIcon />
    </DisabableButtonAnimationWrapper>
  );
};
