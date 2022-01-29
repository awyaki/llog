import { VFC } from 'react';

import { container } from './style/container';

import { Note } from './components/Note';

import { NoteWithRelation } from '~/pages/type';

type Props = {
  notes: NoteWithRelation[]; 
};

export const NoteList: VFC<Props> = ({ notes }) => { 
  return notes.length !== 0
      ? <ul css={container}>
          {notes.map((note) => <li key={note.id}><Note note={note} /></li>)}
        </ul>
      : <h2>There are no notes.</h2>
};
