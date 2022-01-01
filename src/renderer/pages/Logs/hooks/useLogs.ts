import { useState, useEffect, useCallback, useContext } from 'react';

import { LogWithRelation } from '~/pages/type';

import { getAllLog, createLog } from '~/api';

import { NotifierContext } from '~/components';


import { Block, Tag } from '@prisma/client';

export const useLogs = () => {
  const [logs, setLogs] = useState<LogWithRelation[]>([]);
  const { setMessage } = useContext(NotifierContext);

  useEffect(() => {
    (async () => {
      const result = await getAllLog();
      setLogs(result);
    })();
  }, []);


  const onClickCommit = useCallback(async (
    markdown: string,
    html: string,
    blocks: Block[],
    tags: Tag[],
    contentName: string,
    noteId: number | null,
    contentId: number | null
  ) => {
    console.log('useLogs runs', noteId, contentId);
    // ASSERTION: When a log is created, noteId isn't null and contentId isn't also null.
    if (noteId === null || contentId === null) return ; 
    await createLog(markdown, html, blocks, tags, contentName, noteId, contentId);
    const newLogs = await getAllLog();
    setLogs(newLogs);
    setMessage('submitted!');
  }, []);

  return { logs, onClickCommit };
};
