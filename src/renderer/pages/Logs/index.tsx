import { 
  VFC,
  useContext,
  } from 'react';

import { pageTitle } from '~/pages/style';

import { container } from './style';


import { 
  ModalToSubmitLogContext,
  ModalToSubmitLog
  } from '~/components';

import { LineUpLogsForDate } from './components';

import { useLogs } from './hooks';

export const Logs: VFC = () => {
  const { logs, onSubmitLog } = useLogs()

  const { isOpen, onClose } = useContext(ModalToSubmitLogContext);

  return (
    <>
      <ModalToSubmitLog 
        isOpen={isOpen}
        onClose={onClose}
        onSubmitLog={onSubmitLog}/>
        <div css={container}>
          <h2 css={{ ...pageTitle, marginBottom: '8px' }}>Logs</h2>
          {logs.length === 0 ? <p>No logs</p> : undefined}
          <LineUpLogsForDate 
            logs={logs} />
        </div>
    </>
  );
};
