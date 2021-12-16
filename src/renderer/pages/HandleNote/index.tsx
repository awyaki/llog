import { VFC } from 'react';

import { ContentContextProvider } from '../ContentContextProvider';
import { SelectedBlocksContextProvider } from './SelectedBlocksContextProvider';

import { CreateNote as SubCreateNote } from './CreateNote';

export const CreateNote: VFC = () => {
  return (
      <ContentContextProvider>
        <SelectedBlocksContextProvider>
          <SubCreateNote />
        </SelectedBlocksContextProvider>
      </ContentContextProvider>
  );
};
