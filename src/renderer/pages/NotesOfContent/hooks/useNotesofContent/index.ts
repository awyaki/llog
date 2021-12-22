import { useState, useContext, useEffect } from 'react';

import { getNoteWithContentId } from '~/api'

import { ContentContext } from '~/pages/ContentContextProvider';

import { NoteWithRelation } from '~/pages/type';

export const useNotesOfContent = () => {
  const content = useContext(ContentContext);
  const [notes, setNotes] = useState<NoteWithRelation[]>([]);
  
  console.log('NotesOfContent', notes);
  useEffect(() => {
    if (content !== null) {
      (async () => {
        const notes = await getNoteWithContentId(content.id);
        setNotes(notes);
      })();
    }
  }, [content]);

  return {
    notes,
    content,
  };
};
