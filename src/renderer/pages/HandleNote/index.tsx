import { VFC } from 'react';

import { NoteContextProvider } from '../NoteContextProvider';

import { SelectedBlocksContextProvider } from './SelectedBlocksContextProvider';

import { CollapseToSelectBlocksIsOpenContextProvider } from './components';

import { CreateNote as SubCreateNote } from './CreateNote';

import { ContentWithRelation } from '~/pages/type';

type Props = {
  content: ContentWithRelation;
};

export const CreateNote: VFC<Props> = ({ content }) => {
  return (
      <NoteContextProvider>
        <SelectedBlocksContextProvider>
            <CollapseToSelectBlocksIsOpenContextProvider>
              <SubCreateNote content={content} />
            </CollapseToSelectBlocksIsOpenContextProvider>
        </SelectedBlocksContextProvider>
      </NoteContextProvider>
  );
};
