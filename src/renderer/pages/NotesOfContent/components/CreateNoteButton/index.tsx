import { VFC } from 'react';

import { CreateNoteButtonIcon } from './components/CreateNoteButtonIcon';

export const CreateNoteButton: VFC = () => {
  return (
    <button>
      <CreateNoteButtonIcon />
    </button>
  );
};
