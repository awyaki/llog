import { useEffect, useState, useCallback, useContext } from 'react';

import { asyncForEach } from '~/utils';

import { createLog, updateBlock } from '~/api';

import { NotifierContext } from '~/components';

import { NoteWithRelation, ContentWithRelation } from '~/pages/type';

import { useParams } from 'react-router-dom';

import { getNote, getContent } from '~/api';


export const usePreviewNote = () => {
  const { contentId, noteId } = useParams<{ contentId: string, noteId: string}>();
  const [note, setNote] = useState<NoteWithRelation | null>(null);
  const [content, setContent] = useState<ContentWithRelation | null>(null);
  const { setMessage } = useContext(NotifierContext); 

  useEffect(() => {
    (async () => {
      const resultNote = await getNote(Number(noteId));
      const resultContent = await getContent(Number(contentId));
      setNote(resultNote);
      setContent(resultContent);
    })();
  }, [setNote, noteId, setContent, content, contentId]);

  const onCommitLog = useCallback(async () => {
    if (note === null) return;
    if (content === null) return;
    const { origin: markdown, transformed: html, blocks, tags, contentId, id } = note;
    await createLog(markdown, html, blocks, tags, content.name, id, contentId);
    await asyncForEach(blocks, async (block) => {
      const { id, iteration } = block;
      await updateBlock({
        id: id,
        iteration: iteration + 1,
        level: 5,
        commitedAt: new Date(),
      });
    });
    setMessage('submitted!');
  }, [note, content, setNote, setContent, setMessage]);
  

  return { 
    note: note ?? null,
    contentName: content?.name ?? '',
    onCommitLog,
  };
};
