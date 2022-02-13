import { useEffect, useState, useCallback, useContext } from 'react';

import { useHistory } from 'react-router-dom';

import { asyncForEach } from '~/utils';

import { createLog, updateBlock, deleteNote } from '~/api';

import { NotifierContext } from '~/components';

import { NoteWithRelation, ContentWithRelation } from '~/pages/type';

import { useParams } from 'react-router-dom';

import { getNote, getContent } from '~/api';


export const usePreviewNote = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isDisableDeleteButton, setIsDisableDeleteButton] = useState(true);

  const { contentId, noteId } = useParams<{ contentId: string, noteId: string}>();

  const [note, setNote] = useState<NoteWithRelation | null>(null);

  const [content, setContent] = useState<ContentWithRelation | null>(null);

  const { setMessage } = useContext(NotifierContext); 

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const resultNote = await getNote(Number(noteId));
      const resultContent = await getContent(Number(contentId));
      setNote(resultNote);
      setContent(resultContent);
    })();
  }, [setNote, noteId, setContent, contentId]);

  const onSubmitLog = useCallback(async (title: string) => {
    if (note === null) return;
    if (content === null) return;
    const { origin: markdown, transformed: html, blocks, tags, contentId, id } = note;
    await createLog(markdown, html, blocks, tags, content.name, title, id, contentId);
    await asyncForEach(blocks, async (block) => {
      const { id, iteration } = block;
      await updateBlock({
        id: id,
        iteration: iteration + 1,
        level: 5,
        commitedAt: new Date(),
      });
    });
    setIsOpen(false);
    setMessage('Submit');
  }, [note, content, setNote, setContent, setMessage]);
  
  const onClickEdit = useCallback(() => {
    history.push(`/content/${contentId}/updatenote/${noteId}`);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  
  const onDeleteNote = useCallback(async () => {
    if (note === null) return;
    await deleteNote(note.id);
    setNote(null);
    setMessage('Delete');
    history.push(`/content/${contentId}/notes`);
  }, [contentId, note]);

  const onToggleIsDisableDeleteButton = useCallback(() => {
    setIsDisableDeleteButton((p) => !p);
  }, [])

  return { 
    note: note,
    contentName: content?.name ?? '',
    onSubmitLog,
    onClickEdit,
    isOpen,
    onCloseModal,
    onOpenModal,
    isDisableDeleteButton,
    onDeleteNote,
    onToggleIsDisableDeleteButton,
  };
};
