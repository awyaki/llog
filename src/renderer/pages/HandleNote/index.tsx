import { VFC } from 'react';

import { NoteContextProvider } from '../NoteContextProvider';

import { SelectedBlocksContextProvider } from './SelectedBlocksContextProvider';

import { CreateNote as SubCreateNote } from './CreateNote';

import { ContentWithRelation } from '~/pages/type';

type Props = {
  content: ContentWithRelation;
};

export const CreateNote: VFC<Props> = ({ content }) => {
  return (
      <NoteContextProvider>
        <SelectedBlocksContextProvider>
            <SubCreateNote content={content} />
        </SelectedBlocksContextProvider>
      </NoteContextProvider>
  );
};
