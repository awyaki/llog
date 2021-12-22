import { useState, useEffect } from 'react';

import { getNote } from '~/api';

import { useParams } from 'react-router-dom';

import { NoteWithRelation } from '../../type';


export const useNote = () => {
  const [note, setNote] = useState<NoteWithRelation | null>(null);
  const { noteId }  = useParams<{ noteId: string | undefined }>();
  console.log('useNote noteId', noteId);
  useEffect(() => {
    if (noteId !== undefined) {
      (async () => {
        const note = await getNote(Number(noteId));
        setNote(note);
      })();
    }
  }, [noteId]);
  
  return note;
};
