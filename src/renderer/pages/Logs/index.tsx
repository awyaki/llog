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
    filteredLogs, 
    sinceQuery,
    setSinceQuery,
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
          <h2 css={{ ...pageTitle, marginBottom: '8px' }}>Logs</h2>
          {logs.length === 0 ? <p>No logs</p> : undefined}
          <SearchLogs  
            sinceQuery={sinceQuery}
            setSinceQuery={(date: Date | null) => {
              console.log('setSinceQuery is called');
              setSinceQuery(date);
            }} />
          <LineUpLogsForDate 
            logs={filteredLogs} />
        </div>
    </>
  );
};
