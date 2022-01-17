import { VFC } from 'react';

import { EditNoteIcon } from '~/components';

export const CreateNoteButton: VFC = () => {
  return (
    <button>
      <EditNoteIcon size="large" />
    </button>
  );
};
