import { useEffect, useState } from 'react';

import { NoteWithRelation } from '~/pages/type';

import { useParams } from 'react-router-dom';

import { getNote, getContent } from '~/api';


export const usePreviewNote = () => {
  const { contentId, noteId } = useParams<{ contentId: string, noteId: string}>();
  const [note, setNote] = useState<NoteWithRelation | null>(null);
  const [contentName, setContentName] = useState<string>('');
  
  useEffect(() => {
    (async () => {
      const resultNote = await getNote(Number(noteId));
      const resultContent = await getContent(Number(contentId));
      setNote(resultNote);
      setContentName(resultContent?.name ?? '');
    })();
  }, [setNote, noteId, setContentName, contentId]);
  
  if (note === null) return null;

  return { 
    ...note,
    contentName
  };
};
