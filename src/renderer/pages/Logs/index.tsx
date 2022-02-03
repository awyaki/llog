import { VFC } from 'react';

import { pageTitle } from '~/pages/style';

import { container } from './style';

import { LineUpLogsForDate } from './components';

import { useLogs } from './hooks';

export const Logs: VFC = () => {
  const { logs, onClickCommit } = useLogs()

  return (
    <div css={container}>
      <h2 css={pageTitle}>Logs</h2>
      <LineUpLogsForDate 
        logs={logs}
        onClickCommit={onClickCommit} />
    </div>
  );
};
