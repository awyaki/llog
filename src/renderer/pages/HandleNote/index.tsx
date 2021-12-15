import { VFC } from 'react';

import { ContentContextProvider } from '../ContentContextProvider';

import { CreateNote as SubCreateNote } from './CreateNote';

export const CreateNote: VFC = () => {
  return (
      <ContentContextProvider>
        <SubCreateNote />
      </ContentContextProvider>
  );
};
