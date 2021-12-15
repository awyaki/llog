import { VFC, MouseEventHandler } from 'react';

import { ShowNoteButtonIcon } from './components/ShowNoteButtonIcon';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>; 
};

export const ShowNoteButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <ShowNoteButtonIcon />
    </button>
  );
};
