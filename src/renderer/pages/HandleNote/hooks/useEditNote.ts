import { 
  useState , 
  useContext, 
  useCallback,
  useMemo
} from 'react';

import { markdownToHTML, createNote } from '~/api';

import { arrayeEqualWithId } from '~/utils';

import { NoteContext } from '~/pages/NoteContextProvider';
import { SelectedTagsContext } from '../SelectedTagsContextProvider';
import { SelectedBlocksContext } from '../SelectedBlocksContextProvider';


import { useDisclosure } from '@chakra-ui/react';
import { useHistory, useLocation } from 'react-router-dom';

import { Mode } from '../types'
import { ContentContext } from '~/pages/ContentContextProvider';
import { confirmer } from '../functions';


export const useEditNote = () => {
  const location = useLocation(); 
  console.log('useEditNote url', location.pathname);

  const content = useContext(ContentContext);
  const note = useContext(NoteContext);
  const { selectedTags } = useContext(SelectedTagsContext);
  const { selectedBlocks } = useContext(SelectedBlocksContext);

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
    
    const isMarkdownChange = note.origin !== markdown;
    const isSelectedTagsChange = arrayeEqualWithId(note.tags, selectedTags);
    const isOpenSelectBlocksChange = arrayeEqualWithId(note.blocks, selectedBlocks);

    return isMarkdownChange || isSelectedTagsChange || isOpenSelectBlocksChange;

  }, [note, markdown, selectedTags, selectedBlocks]);

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

  const onCreateNote = useCallback(() => {
    (async () => {
      if (content !== null) {
        const html = await markdownToHTML(markdown)
        const newNote = await createNote(markdown, html, selectedTags, selectedBlocks, content.id);
        history.push(`/content/${newNote.contentId}/updatenote/${newNote.id}`);
      }
    })();
  }, [markdown, selectedTags, selectedBlocks, content]); 

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
    onCreateNote,
    setToEdit,
    setToPreview,
    handleLink,
  };
};
