import { 
    useState, 
    useEffect,
    useContext,
} from 'react';

import { ContentContext } from '~/components';

import { getNoteWithContentId } from '~/api'

import { NoteWithRelation } from '~/pages/type';


export const useNotesOfContent = () => {
  const [notes, setNotes] = useState<NoteWithRelation[]>([]);
  const { content } = useContext(ContentContext);

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
