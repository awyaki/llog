import { 
  useState , 
  useContext, 
  useCallback,
  useMemo
} from 'react';

import { NoteContext } from '~/pages/NoteContextProvider';

import { useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import { Mode } from '../types'
import { ContentContext } from '~/pages/ContentContextProvider';
import { confirmer } from '../functions';



export const useEditNote = () => {

  const content = useContext(ContentContext);
  const note = useContext(NoteContext);
  const [mode, setMode] = useState<Mode>('edit');
  const [markdown, setMarkdown] = useState('');
  
  const defaultTags = useMemo(() => note !== null ? note.tags : content?.tags ?? [], [note, content]);

  // if `note` is null and `markdown` is empty string, 
  // `isNoteChange` should be false because the note have not be written yet.
  const isNoteChange = useMemo(() => {
    if (note === null) {
      if (markdown === '') return false;
      return true;
    }

    return note.origin !== markdown;

  }, [note, markdown]);
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
    isNoteChange,
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
