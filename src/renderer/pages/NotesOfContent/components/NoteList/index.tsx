import { VFC } from 'react';

import { container } from './style/container';

import { Note } from './components/Note';

import { Note as TNote } from '~/stub/types';

type Props = {
  notes: TNote[]; 
};

export const NoteList: VFC<Props> = ({ notes }) => { 
  return (
    <ul css={container}>
      {notes.map((note) => <li key={Date.now()}><Note note={note} /></li>)}
    </ul>
  );
};
