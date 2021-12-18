import { 
  useState , 
  useContext, 
  useEffect, 
  useCallback
} from 'react';


import { useDisclosure } from '@chakra-ui/react';
import { useParams, useHistory } from 'react-router-dom';

import { getNote } from '~/api';
import { NoteWithRelation } from '~/pages/type';
import { Mode } from '../types'
import { ContentContext } from '~/pages/ContentContextProvider';
import { confirmer } from '../functions';



export const useEditNote = () => {
  const { noteId } = useParams<{ noteId: string | undefined }>();

  const content = useContext(ContentContext);
  const [note, setNote] = useState<NoteWithRelation | null>(null);
  const [mode, setMode] = useState<Mode>('edit');
  const [markdown, setMarkdown] = useState('');
  
  const defaultTags = note !== null ? note.tags : content?.tags ?? [];

  const history = useHistory();

  const { isOpen: isOpenSelectBlocks, 
          onOpen: onOpenSelectBlocks,
          onClose: onCloseSelectBlocks } = useDisclosure();

  const { isOpen: isOpenSelectTags, 
          onOpen: onOpenSelectTags,
          onClose: onCloseSelectTags } = useDisclosure();

  const { isOpen: isOpenCreateNewTag, 
          onOpen: onOpenCreateNewTag,
          onClose: onCloseCreateNewTag } = useDisclosure();

  useEffect(() => {
    (async () => {
      if (noteId !== undefined) {
        const result = await getNote(Number(noteId));
        console.log('CreateNote', result);
        setNote(result);
      }
    })();
  }, [noteId]);

  const setToEdit = useCallback(() => {
    setMode('edit');
  }, []);
  
  const setToPreview = useCallback(() => {
    setMode('preview');
  }, []);
  
  const handleLink = useCallback((path: string, isNoteChange: boolean) => () => {
    if (isNoteChange) {
      if (confirmer()) {
        history.push(path);
        return;
      }
      return;
    }
    
    history.push(path);

  }, [history]);


  return {
    content,
    note,
    markdown,
    setMarkdown,
    mode,
    defaultTags,
    isOpenSelectBlocks,
    onOpenSelectBlocks,
    onCloseSelectBlocks,
    isOpenSelectTags,
    onOpenSelectTags,
    onCloseSelectTags,
    isOpenCreateNewTag,
    onOpenCreateNewTag,
    onCloseCreateNewTag,
    setToEdit,
    setToPreview,
    handleLink,
  };
};
