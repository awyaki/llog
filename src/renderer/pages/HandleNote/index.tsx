import { VFC } from 'react';

import { SelectedBlocksForHandleNoteContextProvider } from '~/components';

import { NoteContextProvider } from '../NoteContextProvider';


import { CollapseToSelectBlocksIsOpenContextProvider } from './components';

import { CreateNote as SubCreateNote } from './CreateNote';

import { ContentWithRelation } from '~/pages/type';

type Props = {
  content: ContentWithRelation;
};

export const CreateNote: VFC<Props> = ({ content }) => {
  return (
      <NoteContextProvider>
        <SelectedBlocksForHandleNoteContextProvider>
            <CollapseToSelectBlocksIsOpenContextProvider>
              <SubCreateNote content={content} />
            </CollapseToSelectBlocksIsOpenContextProvider>
        </SelectedBlocksForHandleNoteContextProvider>
      </NoteContextProvider>
  );
};
