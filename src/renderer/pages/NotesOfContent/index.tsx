import { VFC } from 'react';


import { useDisclosure } from '@chakra-ui/react';
import { useConditions, useNotesOfContent } from './hooks';

import { Box } from '@chakra-ui/react';

import { Header } from '../Header';

import { container } from './style/container'
import { title } from './style/title';
import { buttons } from './style/buttons';
import { makeNoteListsStyle } from './style/noteLists';

import { TagList } from './components/TagList';
import { InfoButton } from './components/InfoButton';
import { CreateNoteButton } from './components/CreateNoteButton'
import { SearchNoteButton } from './components/SearchNoteButton';
import { NoteList } from './components/NoteList';
import { SearchConditions } from './components/SearchConditions';
import { CreateSearchConditions } from './components/CreateSearchConditions';


export const NotesOfContent: VFC = () => {
  const [{ createConditions, currentConditions }, dispatch] = useConditions();
  const { content, notes } = useNotesOfContent();

  const { isOpen: isModalOpen , onClose: onModalClose, onOpen: onModalOpen } = useDisclosure();
  const { isOpen: isDrawerOpen, onClose: onDrawerClose, onOpen: onDrawerOpen } = useDisclosure();

  
  const onModalOpenWithCreateCondition = () => {
    onModalOpen();
    dispatch({ type: 'MODAL/CREATE' });
  };

  return (
        <>
          <Header />
          <div css={container}>
            <CreateSearchConditions 
              isOpen={isModalOpen} 
              onClose={onModalClose} 
              onOverlayClick={onModalClose}
              createCondtions={createConditions}
              dispatch={dispatch}
              />
            <Box w="100%">
              <h1 css={title}>{content?.name ?? ''}</h1>
              <TagList tags={content?.tags ?? []} />
              <ul css={buttons}>
                <li><InfoButton /></li>
                <li><CreateNoteButton /></li>
                <li><SearchNoteButton onClick={onDrawerOpen} /></li>
              </ul>
              <ul css={makeNoteListsStyle(isDrawerOpen)}>
                {isDrawerOpen 
                  ? <li css={{ width: '70%' }}><NoteList notes={notes} /></li> 
                  : <>
                      <li css={{ width: '40%' }}><NoteList notes={notes.filter((_, i) => i % 2 === 0)} /></li>
                      <li css={{ width: '40%' }}><NoteList notes={notes.filter((_, i) => i % 2 !== 0)} /></li>
                    </>
                }
              </ul>
            </Box>
            <SearchConditions 
              isOpen={isDrawerOpen}
              onClose={onDrawerClose}
              handleCreateConditionButtonClick={onModalOpenWithCreateCondition}
              conditions={currentConditions} 
              dispatch={dispatch} />
          </div>
        </>
  );
};
