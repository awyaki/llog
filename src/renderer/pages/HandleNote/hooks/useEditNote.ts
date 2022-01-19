import { 
  useState , 
  useContext, 
  useCallback,
  useMemo,
  useEffect
} from 'react';

import { SelectedTagsContext } from '~/components';

import { asyncForEach } from '~/utils';

import { 
  markdownToHTML, 
  createNote, 
  updateNote, 
  getNote,
  createLog,
  updateBlock,
} from '~/api';

import { arrayeEqualWithId } from '~/utils';

import { NoteContext } from '~/pages/NoteContextProvider';
import { NotifierContext } from '~/components';
import { SelectedBlocksContext } from '../SelectedBlocksContextProvider';


import { useDisclosure } from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';

import { Mode } from '../types'
import { ContentContext } from '~/pages/ContentContextProvider';
import { confirmer } from '../functions';


export const useEditNote = () => {
  const { noteId } = useParams<{ noteId: string | undefined }>();
  const { note, setNote } = useContext(NoteContext);
  const { setMessage } = useContext(NotifierContext);
  const [markdown, setMarkdown] = useState('');
  const { selectedTags, setSelectedTags } = useContext(SelectedTagsContext);
  const { selectedBlocks, dispatch: selectedBlocksDispatch } = useContext(SelectedBlocksContext);

  const [mode, setMode] = useState<Mode>('edit');

  useEffect(() => {
    (async () => {
      if (noteId !== undefined) {
        const note = await getNote(Number(noteId));
        if (note !== null) {
          setMarkdown(note.origin);
          setSelectedTags(note.tags);
          selectedBlocksDispatch({ type: 'SELECTED_BLOCKS/SET', blocks: note.blocks });
          setNote(note);
        }
      }
    })();
  }, [noteId]);

  const isNoteExist = useMemo(() => note !== null, [note]);
  const { content, setContent } = useContext(ContentContext);

  

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
        setMessage('saved!');
      }
    })();
  }, [markdown, selectedTags, selectedBlocks, content]); 

  const onUpdateNote = useCallback(() => {
    (async () => {
      if (note !== null) {
        const html = await markdownToHTML(markdown);
        const updatedNote = await updateNote(note.id, markdown, html, selectedTags, selectedBlocks, note.contentId, note.commitedAt, new Date()); 
        const newNote = await getNote(updatedNote.id); 
        setMessage('saved!');
        setNote(newNote);
      }
    })();
  }, [note, markdown, selectedTags, selectedBlocks]);
  

  const onMoveToOtherNoteEdit = useCallback(() => {
    if (content !== null) {
      history.push(`/content/${content.id}/createnote`);
      setNote(null);
      setMarkdown('');
      setMode('edit');
      selectedBlocksDispatch({ type: 'SELECTED_BLOCKS/SET', blocks: [] });
      setSelectedTags([]);
    }
  }, [history, content]);

  const onCommitLog = useCallback(async () => {
    if (content === null) return;
    const html = await markdownToHTML(markdown);
    if (noteId === undefined) {
      console.log('useEditNote onCommit 1');
      // note creating
      const newNote = await createNote(markdown, html, selectedTags, selectedBlocks, content.id);
      await createLog(markdown, html, selectedBlocks, selectedTags, content.name, newNote.id, content.id);
      // update block level to 5 (max value)
      await asyncForEach(selectedBlocks, async (block) => {
        const { id, iteration } = block;
        await updateBlock({
          id: id,
          iteration: iteration + 1,
          level: 5,
          commitedAt: new Date(),
        });
      });
      setMarkdown('');
      setSelectedTags([]);
      selectedBlocksDispatch({ type: 'SELECTED_BLOCKS/SET', blocks: [] });
    } else {
      if (note === null) return;
      // note updating
      console.log('useEditNote onCommit 2');
      await updateNote(note.id, markdown, html, selectedTags, selectedBlocks, note.contentId, note.commitedAt, new Date()); 
      await createLog(markdown, html, selectedBlocks, selectedTags, content.name, note.id, content.id);
      // update block level to 5 (max value)
      await asyncForEach(selectedBlocks, async (block) => {
        const { id, iteration } = block;
        await updateBlock({
          id: id,
          iteration: iteration + 1,
          level: 5,
          commitedAt: new Date(),
        });
      });
      setMarkdown('');
      setSelectedTags([]);
      selectedBlocksDispatch({ type: 'SELECTED_BLOCKS/SET', blocks: [] });
      setNote(null);
      console.log('useEditNote note', note);
      history.push(`/content/${content.id}/createnote`);
    }
    setMessage('submitted!');
  }, [content, noteId, history, markdown, note, selectedTags, selectedBlocks]);

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
    onCreateNote,
    onUpdateNote,
    isNoteExist,
    onMoveToOtherNoteEdit,
    onCommitLog,
    setToEdit,
    setToPreview,
    handleLink,
  };
};
