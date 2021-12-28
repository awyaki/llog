import { VFC, MouseEventHandler } from 'react';
import { EditNoteIcon } from './components';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const EditNoteButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <EditNoteIcon />
    </button>
  );
};
