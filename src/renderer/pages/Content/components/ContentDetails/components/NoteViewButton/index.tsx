import { VFC } from 'react';

import { NotesIcon } from '~/components';

export const NoteViewButton: VFC = () => {
  return (
    <button>
      <NotesIcon size="large" />
    </button>
  );
};
