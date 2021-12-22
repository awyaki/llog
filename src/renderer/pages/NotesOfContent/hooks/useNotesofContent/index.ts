import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { getNoteWithContentId, getContent } from '~/api'

import { NoteWithRelation, ContentWithRelation } from '~/pages/type';


export const useNotesOfContent = () => {
  const { contentId } = useParams<{ contentId: string }>();
  const [content, setContent] = useState<ContentWithRelation | null>(null);
  const [notes, setNotes] = useState<NoteWithRelation[]>([]);
  
  console.log('NotesOfContent', notes);
  console.log('NotesOfContent', content);  

  useEffect(() => {
    (async () => {
      const content = await getContent(Number(contentId));
      setContent(content);
    })();
  }, [contentId]);


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
