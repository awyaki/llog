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

import { LineUpLogsForDate } from './components';

import { useLogs } from './hooks';

export const Logs: VFC = () => {
  const { logs, onSubmitLog, onUpdateLogTitle } = useLogs()

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
          <LineUpLogsForDate 
            logs={logs} />
        </div>
    </>
  );
};
