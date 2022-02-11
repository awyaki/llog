import { VFC } from 'react';


import { Note } from './components/Note';

import { NoteWithRelation } from '~/pages/type';

type Props = {
  notes: NoteWithRelation[]; 
};

export const NoteList: VFC<Props> = ({ notes }) => { 
  return notes.length !== 0
      ? <ul css={{
          '> li': { marginBottom: '16px' },
          '> li:nth-last-of-type(1)': { marginBottom: 0 }
        }}>
          {notes.map((note) => <li key={note.id}><Note note={note} /></li>)}
        </ul>
      : <p>No notes.</p>
};
