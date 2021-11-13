import { VFC, useState, MouseEventHandler, useContext } from 'react';

import { container } from './style/container'
import { title } from './style/title';
import { buttons } from './style/buttons';
import { noteLists } from './style/noteLists';
import { main as mainStyle } from './style/main';

import { TagList } from './components/TagList';
import { InfoButton } from './components/InfoButton';
import { CreateNoteButton } from './components/CreateNoteButton'
import { SearchNoteButton } from './components/SearchNoteButton';
import { NoteList } from './components/NoteList';
import { SearchConditions } from './components/SearchConditions';
import { CreateSearchConditions } from './components/CreateSearchConditions';


import { IsExpandModalContext } from '~/components/IsExpandModalProvider';

import { notes } from '~/stub/notes';
import { SearchCondition } from '~/stub/types';

const searchConditions: SearchCondition[] = [
  { isVaild: true, kind: 'NOTE', type: 'IS', op: 'AND', not: false, text: 'チューリング機械' },
  { isVaild: true, kind: 'TAG', type: 'IS', op: 'OR', not: true, text: 'インタープリタ' },
];


export const NotesOfContent: VFC = () => {
  const { setIsExpandModal } = useContext(IsExpandModalContext);
  const [isCreateCondition, setIsCreateCondition] = useState(false);
  const [showConditions, setShowConditions] = useState(false);

  const contentName = 'コンパイラ原理と構造';
  const tags = [{ id: 1, name: 'Computer Science' }, { id: 2, name: '計算機科学' }];
  
  const handleSearchNoteButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    setShowConditions((prev) => !prev);
  };

  const handleCreateConditionsButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    setIsExpandModal(true);
    setIsCreateCondition(true);
  };

  return (
    <div css={container}>
      {isCreateCondition ? <CreateSearchConditions /> : undefined}
      <main css={showConditions ? mainStyle : {}}>
        <h1 css={title}>{contentName}</h1>
        <TagList tags={tags} />
        <ul css={buttons}>
          <li><InfoButton /></li>
          <li><CreateNoteButton /></li>
          <li><SearchNoteButton onClick={handleSearchNoteButtonClick} /></li>
        </ul>
        <ul css={noteLists}>
          <li><NoteList notes={notes} /></li>
          <li><NoteList notes={notes} /></li>
        </ul>
      </main>
      {showConditions ? <SearchConditions 
                          handleCreateConditionButtonClick={handleCreateConditionsButtonClick}
                          conditions={searchConditions} 
                          handleSearchNoteButtonClick={handleSearchNoteButtonClick}/> : undefined}
    </div>
  );
};
