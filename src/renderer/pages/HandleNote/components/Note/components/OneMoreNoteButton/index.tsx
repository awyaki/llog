import { VFC, MouseEventHandler } from 'react';

import { OneMoreNoteButtonIcon } from './components/OneMoreNoteButtonIcon';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const OneMoreNoteButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <OneMoreNoteButtonIcon /> 
    </button>
  );
};
