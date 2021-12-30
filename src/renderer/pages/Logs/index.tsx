import { VFC } from 'react';

import { Box } from '@chakra-ui/react';

import { container, title } from './style';

import { Header } from './components';

import { LineUpLogsForDate } from './components';

import { useLogs } from './hooks';

export const Logs: VFC = () => {
  const { logs, onClickCommit } = useLogs()

  return (
    <>
      <Header />
      <Box css={container}>
        <h2 css={{ ...title, marginBottom: '16px' }}>Logs</h2>
        <LineUpLogsForDate 
          logs={logs}
          onClickCommit={onClickCommit} />
      </Box>
    </>
  );
};
