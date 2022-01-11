import { VFC } from 'react';

import { NoteContextProvider } from '../NoteContextProvider';
import { ContentContextProvider } from '../ContentContextProvider';
import { SelectedBlocksContextProvider } from './SelectedBlocksContextProvider';

import { CreateNote as SubCreateNote } from './CreateNote';

export const CreateNote: VFC = () => {
  return (
      <ContentContextProvider>
        <NoteContextProvider>
          <SelectedBlocksContextProvider>
              <SubCreateNote />
          </SelectedBlocksContextProvider>
        </NoteContextProvider>
      </ContentContextProvider>
  );
};
