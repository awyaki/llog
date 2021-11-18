import { VFC } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useConditions } from './hooks/useConditions';

import { Box } from '@chakra-ui/react';

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



import { notes } from '~/stub/notes';
import { SearchCondition } from '~/stub/types';
// stub
const [{ id: id1, ...rest1 }, { id: id2, ...rest2 }] = notes;
const notes1 = [...notes]; 
const notes2 = [{ id: 3, ...rest1 }, { id: 4, ...rest2}];

const searchConditions: SearchCondition[] = [
  { id: '1', isVaild: true, kind: 'NOTE', type: 'IS', op: 'AND', not: false, text: 'チューリング機械' },
  { id: '2', isVaild: true, kind: 'TAG', type: 'IS', op: 'OR', not: true, text: 'インタープリタ' },
];


export const NotesOfContent: VFC = () => {
  const [{ createConditions, currentConditions }, dispatch] = useConditions();
  const { isOpen: isModalOpen , onClose: onModalClose, onOpen: onModalOpen } = useDisclosure();
  const { isOpen: isDrawerOpen, onClose: onDrawerClose, onOpen: onDrawerOpen } = useDisclosure();

  const contentName = 'コンパイラ原理と構造';
  const tags = [{ id: 1, name: 'Computer Science' }, { id: 2, name: '計算機科学' }];

  return (
        <div css={container}>
          <CreateSearchConditions 
            isOpen={isModalOpen} 
            onClose={onModalClose} 
            onOverlayClick={onModalClose}
            createCondtions={createConditions}
            dispatch={dispatch}
            />
          <Box>
            <h1 css={title}>{contentName}</h1>
            <TagList tags={tags} />
            <ul css={buttons}>
              <li><InfoButton /></li>
              <li><CreateNoteButton /></li>
              <li><SearchNoteButton onClick={onDrawerOpen} /></li>
            </ul>
            <ul css={makeNoteListsStyle(isDrawerOpen)}>
              {isDrawerOpen 
                ? <li><NoteList notes={[...notes1, ...notes2]} /></li> 
                : <>
                    <li><NoteList notes={notes1} /></li>
                    <li><NoteList notes={notes2} /></li>
                  </>
              }
            </ul>
          </Box>
          <SearchConditions 
            isOpen={isDrawerOpen}
            onClose={onDrawerClose}
            handleCreateConditionButtonClick={onModalOpen}
            conditions={searchConditions} />
        </div>
  );
};
