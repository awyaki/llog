import { VFC, MouseEventHandler } from 'react';
import { EditNoteIcon } from './components';

type Props = {
  size?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const EditNoteButton: VFC<Props> = ({ size = '36px', onClick }) => {
  return (
    <button onClick={onClick}>
      <EditNoteIcon size={size} />
    </button>
  );
};
