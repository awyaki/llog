import { 
    useState, 
    useEffect,
} from 'react';

import { getNoteWithContentId } from '~/api'

import { NoteWithRelation } from '~/pages/type';


export const useNotesOfContent = (contentId: number) => {
  const [notes, setNotes] = useState<NoteWithRelation[]>([]);

  useEffect(() => {
    (async () => {
      const fetchedNotes = await getNoteWithContentId(contentId);
      setNotes(fetchedNotes);
    })();
  }, [contentId])
  return { notes };
};
