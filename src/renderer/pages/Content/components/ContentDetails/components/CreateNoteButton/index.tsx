import { VFC } from 'react';

import { CreateNoteIcon } from './components/CreateNoteIcon';

export const CreateNoteButton: VFC = () => {
  return (
    <button>
      <CreateNoteIcon />
    </button>
  );
};
