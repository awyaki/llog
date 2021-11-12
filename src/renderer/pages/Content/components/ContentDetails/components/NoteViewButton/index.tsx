import { VFC } from 'react';

import { NoteViewIcon } from './components/NoteViewIcon';

export const NoteViewButton: VFC = () => {
  return (
    <button>
      <NoteViewIcon />
    </button>
  );
};
