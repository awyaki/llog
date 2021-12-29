import { VFC, useEffect, useState } from 'react';

import { LogWithRelation } from '~/pages/type';

import { Box } from '@chakra-ui/react';

import { container, title } from './style';

import { Header } from './components';

import { LogsForDate } from './components';

import { getAllLog } from '~/api';

export const Logs: VFC = () => {
  const [logs, setLogs] = useState<LogWithRelation[]>([]);

  useEffect(() => {
    (async () => {
      const result = await getAllLog();
      setLogs(result);
    })();
  }, []);
  return (
    <>
      <Header />
      <Box css={container}>
        <h2 css={title}>Logs</h2>
        <LogsForDate logs={logs} />
      </Box>
    </>
  );
};
