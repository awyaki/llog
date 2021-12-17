import { VFC } from 'react';

import { ContentContextProvider } from '../ContentContextProvider';
import { SelectedBlocksContextProvider } from './SelectedBlocksContextProvider';
import { SelectedTagsContextProvider } from './SelectedTagsContextProvider';

import { CreateNote as SubCreateNote } from './CreateNote';

export const CreateNote: VFC = () => {
  return (
      <ContentContextProvider>
        <SelectedBlocksContextProvider>
          <SelectedTagsContextProvider>
            <SubCreateNote />
          </SelectedTagsContextProvider>
        </SelectedBlocksContextProvider>
      </ContentContextProvider>
  );
};
