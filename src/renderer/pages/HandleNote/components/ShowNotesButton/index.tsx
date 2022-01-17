import { VFC, MouseEventHandler } from 'react';

import { NotesIcon } from '~/components';

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>; 
};

export const ShowNoteButton: VFC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <NotesIcon size="large" />
    </button>
  );
};
