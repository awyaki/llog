import { VFC, MouseEventHandler } from 'react';

import { PreviewButtonIcon } from './components/PreviewButtonIcon';

type Props = {
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const PreviewButton: VFC<Props> = ({ isActive, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={!isActive}>
      <PreviewButtonIcon isActive={isActive} />
    </button>

  );
};
