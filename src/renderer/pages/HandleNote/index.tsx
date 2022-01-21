import { VFC } from 'react';

import { NoteContextProvider } from '../NoteContextProvider';

import { SelectedBlocksContextProvider } from './SelectedBlocksContextProvider';

import { CreateNote as SubCreateNote } from './CreateNote';

export const CreateNote: VFC = () => {
  return (
      <NoteContextProvider>
        <SelectedBlocksContextProvider>
            <SubCreateNote />
        </SelectedBlocksContextProvider>
      </NoteContextProvider>
  );
};
