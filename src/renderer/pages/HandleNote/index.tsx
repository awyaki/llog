import { VFC } from 'react';

import { NoteContextProvider } from '../NoteContextProvider';
import { ContentContextProvider } from '../ContentContextProvider';
import { SelectedBlocksContextProvider } from './SelectedBlocksContextProvider';
import { SelectedTagsContextProvider } from './SelectedTagsContextProvider';

import { CreateNote as SubCreateNote } from './CreateNote';

export const CreateNote: VFC = () => {
  return (
      <ContentContextProvider>
        <NoteContextProvider>
          <SelectedBlocksContextProvider>
            <SelectedTagsContextProvider>
              <SubCreateNote />
            </SelectedTagsContextProvider>
          </SelectedBlocksContextProvider>
        </NoteContextProvider>
      </ContentContextProvider>
  );
};
