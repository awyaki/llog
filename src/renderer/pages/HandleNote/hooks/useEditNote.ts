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
  const [markdown, setMarkdown] = useState('');

  const { selectedTags, dispatch: selectedTagsDispatch } = useContext(SelectedTagsContext);
  const { selectedBlocks, dispatch: selectedBlocksDispatch } = useContext(SelectedBlocksContext);

  const [mode, setMode] = useState<Mode>('edit');

  useEffect(() => {
    (async () => {
      if (noteId !== undefined) {
        const note = await getNote(Number(noteId));
        if (note !== null) {
          setMarkdown(note.origin);
          selectedTagsDispatch({ type: 'SELECTED_TAGS/SET', tags: note.tags });
          selectedBlocksDispatch({ type: 'SELECTED_BLOCKS/SET', blocks: note.blocks });
          setNote(note);
        }
      }
    })();
  }, [noteId]);

  const isNoteExist = useMemo(() => note !== null, [note]);
  const content = useContext(ContentContext);

  

  // if `note` is null and `markdown` is empty string, 
  // `isNoteChange` should be false because the note have not be written yet.
  const isNoteChange = useMemo(() => {
    if (note === null) {
      if (selectedTags.length !== 0) return true;
      if (selectedBlocks.length !== 0) return true;
      if (markdown !== '') return true;
      return false;
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
        setNote(newNote);
      }
    })();
  }, [note, markdown, selectedTags, selectedBlocks]);
  
  const onMoveToOtherNoteEdit = useCallback(() => {
    if (content !== null) {
      history.push(`/content/${content.id}/createnote`);
    }
  }, [history, content]);

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
    onMoveToOtherNoteEdit,
    setToEdit,
    setToPreview,
    handleLink,
  };
};
