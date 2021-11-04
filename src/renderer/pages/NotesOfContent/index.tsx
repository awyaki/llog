import { VFC } from 'react';

import { container } from './style/container'
import { title } from './style/title';
import { buttons } from './style/buttons';
import { noteLists } from './style/noteLists';

import { TagList } from './components/TagList';
import { InfoButton } from './components/InfoButton';
import { CreateNoteButton } from './components/CreateNoteButton'
import { SearchNoteButton } from './components/SearchNoteButton';
import { NoteList } from './components/NoteList';


import { notes } from '~/stub/notes';

export const NotesOfContent: VFC = () => {
  const contentName = 'コンパイラ原理と構造';
  const tags = [{ id: 1, name: 'Computer Science' }, { id: 2, name: '計算機科学' }];
  return (
    <div css={container}>
      <h1 css={title}>{contentName}</h1>
      <TagList tags={tags} />
      <ul css={buttons}>
        <li><InfoButton /></li>
        <li><CreateNoteButton /></li>
        <li><SearchNoteButton /></li>
      </ul>
      <ul css={noteLists}>
        <li><NoteList notes={notes} /></li>
        <li><NoteList notes={notes} /></li>
      </ul>
    </div>
  );
};
