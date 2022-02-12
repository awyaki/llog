import { 
  useState , 
  useContext, 
  useCallback,
  useMemo,
  useEffect
} from 'react';


import { asyncForEach } from '~/utils';

import { 
  markdownToHTML, 
  createNote, 
  updateNote, 
  getNote,
  createLog,
  updateBlock,
  getContent,
} from '~/api';

import { arrayeEqualWithId } from '~/utils';

import { NoteContext } from '~/pages/NoteContextProvider';
import { 
  NotifierContext,
  ContentContext, 
  SelectedTagsForHandleNoteContext,
  IsAllowTransitionContext,
  SelectedBlocksForHandleNoteContext,
  MarkdownForHandleNoteContext
} from '~/components';



import { useDisclosure } from '@chakra-ui/react';
import { useHistory, useParams } from 'react-router-dom';

import { Mode } from '../types'
import { confirmer } from '../functions';

import { ContentWithRelation } from '~/pages/type';


export const useEditNote = (content: ContentWithRelation) => {
  const { noteId, contentId } = useParams<{ noteId: string | undefined, contentId: string }>();
  const { note, setNote } = useContext(NoteContext);
  const { setMessage } = useContext(NotifierContext);
  const { markdown, setMarkdown } = useContext(MarkdownForHandleNoteContext);
  const { 
      selectedTagsForHandleNote: selectedTags,
      setSelectedTagsForHandleNote: setSelectedTags,
      toggleSelectedTagsForHandleNote,
  } = useContext(SelectedTagsForHandleNoteContext);

  const { selectedBlocks, dispatch: selectedBlocksDispatch } = useContext(SelectedBlocksForHandleNoteContext);
  
  const [mode, setMode] = useState<Mode>('edit');
  const { 
    setIsAllowTransition,
    setConfirmerMessage 
  } = useContext(IsAllowTransitionContext);
  

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
    return () => {
        setMarkdown('');
        setSelectedTags([]);
        selectedBlocksDispatch({ type: 'SELECTED_BLOCKS/SET', blocks: [] });
        setNote(null);
    };
  }, [noteId]);

  const isNoteExist = useMemo(() => note !== null, [note]);
  const { setContent } = useContext(ContentContext);

  
  useEffect(() => {
    (async () => {
      const result = await getContent(Number(contentId));
      setContent(result);
    })();
  }, [contentId]);

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

  useEffect(() => {
    if (isNoteChange) {
      setIsAllowTransition(false);
      setConfirmerMessage('If you leave this page now, you will lose all changes which are not saved.');
    } else {
      setIsAllowTransition(true);
      setConfirmerMessage('');
    }

    return () => {
      setIsAllowTransition(true);
      setConfirmerMessage('');
    };
  }, [setConfirmerMessage, setIsAllowTransition, isNoteChange]);

  const history = useHistory();

  const { isOpen: isOpenSelectBlocks, 
          onOpen: onOpenSelectBlocks,
          onClose: onCloseSelectBlocks } = useDisclosure();

  
  const toggleEditBetweenPreview = useCallback(() => {
    setMode((mode) => mode === 'edit' ? 'preview' : 'edit');
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
        setMessage('Saved');
      }
    })();
  }, [markdown, selectedTags, selectedBlocks, content]); 

  const onUpdateNote = useCallback(() => {
    (async () => {
      if (note !== null) {
        const html = await markdownToHTML(markdown);
        const updatedNote = await updateNote(note.id, markdown, html, selectedTags, selectedBlocks, note.contentId, note.commitedAt, new Date()); 
        const newNote = await getNote(updatedNote.id); 
        setMessage('Saved');
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

  const onCommitLog = useCallback(async (title: string) => {
    if (content === null) return;
    const html = await markdownToHTML(markdown);
    if (noteId === undefined) {
      // note creating
      const newNote = await createNote(markdown, html, selectedTags, selectedBlocks, content.id);
      // TODO: crate logic of input title
      await createLog(markdown, html, selectedBlocks, selectedTags, content.name, title, newNote.id, content.id);
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
      const newContent = await getContent(content.id);
      setContent(newContent);
      setMarkdown('');
      setSelectedTags([]);
      selectedBlocksDispatch({ type: 'SELECTED_BLOCKS/SET', blocks: [] });
    } else {
      if (note === null) return;
      // note updating
      await updateNote(note.id, markdown, html, selectedTags, selectedBlocks, note.contentId, note.commitedAt, new Date()); 
      // TODO: crate logic of input title
      await createLog(markdown, html, selectedBlocks, selectedTags, content.name, title, note.id, content.id);
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
      const newContent = await getContent(content.id);
      setContent(newContent);
      setMarkdown('');
      setSelectedTags([]);
      selectedBlocksDispatch({ type: 'SELECTED_BLOCKS/SET', blocks: [] });
      setNote(null);
      history.push(`/content/${content.id}/createnote`);
    }
    setMode('edit');
    setMessage('Submit');
  }, [content, contentId, noteId, history, markdown, note, selectedTags, selectedBlocks]);

  return {
    content,
    note,
    markdown,
    selectedTags,
    setSelectedTags,
    toggleSelectedTagsForHandleNote,
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
    toggleEditBetweenPreview,
    handleLink,
  };
};
