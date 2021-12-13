import { VFC, MouseEventHandler } from 'react';

import { TakeANoteButtonIcon } from './components/TakeANoteButtonIcon';

type Props = {
  isActive: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const TakeANoteButton: VFC<Props> = ({ isActive, onClick }) => {
  return ( 
    <button 
      onClick={onClick} 
      disabled={!isActive}>
      <TakeANoteButtonIcon isActive={isActive} />
    </button>
  );
};
