import { VFC } from 'react';

import { LogWithRelation } from '~/pages/type';

import { divideLogsByDate } from '~/utils';

import { LogsForDate } from './components';

import { OnClickCommit } from '~/pages/Logs/type';

type Props = {
  logs: LogWithRelation[];
  onClickCommit: OnClickCommit;
};

export const LineUpLogsForDate: VFC<Props> = ({ logs, onClickCommit }) => {
  const dividedLogs = divideLogsByDate(logs);
  return (
    <>
      {dividedLogs.map((logs) => <LogsForDate 
                                    key={logs[0].id} 
                                    logs={logs} 
                                    onClickCommit={onClickCommit}
                                    />)}
    </>
  );
};
