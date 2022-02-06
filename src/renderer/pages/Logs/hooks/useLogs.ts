import { useState, useEffect, useCallback, useContext } from 'react';

import { asyncForEach } from '~/utils';

import { LogWithRelation } from '~/pages/type';

import { 
  getAllLog, 
  createLog, 
  updateBlock,
  updateLogTitle,
} from '~/api';

import { useSearchLogs } from './useSearchLogs';

import { 
    NotifierContext,
    LogContext
} from '~/components';

export const useLogs = () => {
  const [logs, setLogs] = useState<LogWithRelation[]>([]);

  const { setMessage } = useContext(NotifierContext);

  const { log } = useContext(LogContext);

  const { 
    filteredLogs, 
    sinceQuery,
    setSinceQuery,
    untilQuery,
    setUntilQuery,
  } = useSearchLogs(logs);


  useEffect(() => {
    (async () => {
      const result = await getAllLog();
      setLogs(result);
    })();
  }, []);


  const onSubmitLog= useCallback(async (title: string) => {
    if (log === null) return;
    const {
      markdown,
      html,
      blocks,
      tags,
      contentName,
      noteId,
      contentId,
    } = log;
    // ASSERTION: When a log is created, noteId isn't null and contentId isn't also null.
    if (noteId === null || contentId === null) return ; 
    await createLog(markdown, html, blocks, tags, contentName, title, noteId, contentId);
    const newLogs = await getAllLog();
    await asyncForEach(blocks, async (block) => {
      const { id, iteration  } = block;
      await updateBlock({
        id: id,
        iteration: iteration + 1,
        level: 5,
        commitedAt: new Date(),
      });
    });

    setLogs(newLogs);
    setMessage('Submit');
  }, [log]);

  const onUpdateLogTitle = useCallback(async (title: string)=> {
    if (log === null) return;
    const { id } = log;
    await updateLogTitle(id, title);
    const newLogs = await getAllLog();
    setLogs(newLogs);
    setMessage('Update');
  }, [log]);

  return { 
    logs, 
    sinceQuery,
    setSinceQuery,
    untilQuery,
    setUntilQuery,
    filteredLogs,
    onSubmitLog,
    onUpdateLogTitle
  };
};
