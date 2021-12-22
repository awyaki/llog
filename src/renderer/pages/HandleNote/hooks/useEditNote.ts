import { 
  useState , 
  useContext, 
  useCallback,
  useMemo,
  useEffect
} from 'react';


import { markdownToHTML, createNote, updateNote, getNote } from '~/api';

import { arrayeEqualWithId } from '~/utils';

import { NoteContext } from '~/pages/NoteContextProvider';
import { SelectedTagsContext } from '../SelectedTagsContextProvider';
import { SelectedBlocksContext } from '../SelectedBlocksContextProvider';


import { useDisclosure } from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';

import { Mode } from '../types'
import { ContentContext } from '~/pages/ContentContextProvider';
import { confirmer } from '../functions';


export const useEditNote = () => {
  const { noteId } = useParams<{ noteId: string | undefined }>();
  const { note, setNote }= useContext(NoteContext);

  useEffect(() => {
    (async () => {
      if (noteId !== undefined) {
        const note = await getNote(Number(noteId));
        setNote(note);
      }
    })();
  }, [noteId]);

  const isNoteExist = useMemo(() => note !== null, [note]);
  console.log('useEditNote isNoteExist:', isNoteExist);
  const content = useContext(ContentContext);

  const { selectedTags } = useContext(SelectedTagsContext);
  const { selectedBlocks } = useContext(SelectedBlocksContext);

  const [mode, setMode] = useState<Mode>('edit');
  const [markdown, setMarkdown] = useState('');
  

  // if `note` is null and `markdown` is empty string, 
  // `isNoteChange` should be false because the note have not be written yet.
  const isNoteChange = useMemo(() => {
    if (note === null) {
      if (markdown === '') return false;
      return true;
    }
    
    const isMarkdownChange = note.origin !== markdown;
    const isSelectedTagsChange = !arrayeEqualWithId(note.tags, selectedTags);
    const isSelectedBlocksChange = !arrayeEqualWithId(note.blocks, selectedBlocks);
    
    return isMarkdownChange || isSelectedTagsChange || isSelectedBlocksChange;

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
        const html = await markdownToHTML(markdown);
        const newNote = await createNote(markdown, html, selectedTags, selectedBlocks, content.id);
        history.push(`/content/${newNote.contentId}/updatenote/${newNote.id}`);
      }
    })();
  }, [markdown, selectedTags, selectedBlocks, content]); 

  const onUpdateNote = useCallback(() => {
    (async () => {
      if (note !== null) {
        const html = await markdownToHTML(markdown);
        const updatedNote = await updateNote(note.id, markdown, html, selectedTags, selectedBlocks, note.contentId, note.commitedAt, new Date()); 
        const newNote = await getNote(updatedNote.id); 
        console.log('useEditNote', newNote);
        setNote(newNote);
      }
    })();
  }, [note, markdown, selectedTags, selectedBlocks]);

  return {
    content,
    note,
    markdown,
    setMarkdown,
    mode,
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
    onUpdateNote,
    isNoteExist,
    setToEdit,
    setToPreview,
    handleLink,
  };
};
