import { VFC, MouseEventHandler } from 'react';

import { OneMoreNoteButtonIcon } from './components/OneMoreNoteButtonIcon';

type Props = {
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const OneMoreNoteButton: VFC<Props> = ({ disabled, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      <OneMoreNoteButtonIcon disabled={disabled} /> 
    </button>
  );
};
