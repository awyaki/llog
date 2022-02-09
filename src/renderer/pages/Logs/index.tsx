import { 
  VFC,
  useContext,
  } from 'react';

import { pageTitle } from '~/pages/style';

import { container } from './style';


import { 
  ModalToSubmitLogContext,
  ModalToSubmitLog,
  ModalToUpdateLogTitle,
  ModalToUpdateLogTitleContext
  } from '~/components';

import { 
  LineUpLogsForDate,
  SearchLogs,
  } from './components';

import { useLogs } from './hooks';

export const Logs: VFC = () => {
  const { 
    logs, 
    tags,
    filteredLogs, 
    titleQuery,
    setTitleQuery,
    sinceQuery,
    setSinceQuery,
    tagsQuery,
    setTagsQuery,
    toggleTagsQuery,
    untilQuery,
    setUntilQuery,
    onSubmitLog, 
    onUpdateLogTitle
    } = useLogs()
 
  
  const { isOpen: isOpenSubmit, onClose: onCloseSubmit } = useContext(ModalToSubmitLogContext);
  const { isOpen: isOpenUpdate, onClose: onCloseUpdate } = useContext(ModalToUpdateLogTitleContext);

  return (
    <>
      <ModalToSubmitLog 
        isOpen={isOpenSubmit}
        onClose={onCloseSubmit}
        onSubmitLog={onSubmitLog}/>
        <ModalToUpdateLogTitle 
          isOpen={isOpenUpdate}
          onClose={onCloseUpdate}
          onUpdateLogTilte={onUpdateLogTitle}
        />
        <div css={container}>
          <h2 css={{ ...pageTitle, marginBottom: '16px' }}>Logs</h2>
          <SearchLogs  
            titleQuery={titleQuery}
            setTitleQuery={setTitleQuery}
            sinceQuery={sinceQuery}
            setSinceQuery={setSinceQuery}
            untilQuery={untilQuery}
            setUntilQuery={setUntilQuery}
            tags={tags}
            tagsQuery={tagsQuery}
            setTagsQuery={setTagsQuery}
            toggleTagsQuery={toggleTagsQuery}
          />
          {logs.length === 0 ? <p>No logs</p> : undefined}
          <LineUpLogsForDate 
            logs={filteredLogs} />
        </div>
    </>
  );
};
