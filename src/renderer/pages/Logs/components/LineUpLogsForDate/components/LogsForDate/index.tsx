import { VFC } from 'react';

import { colors, font } from '~/styleConfig';

import { makeFormalDateString, makeFormalTimeString } from '~/utils';

import { LogWithRelation } from '~/pages/type';

import { NoteWithContentName } from '~/components';

import { LogCard } from './components';

import { OnClickCommit } from '~/pages/Logs/type';


type Props = {
  logs: LogWithRelation[];
  onClickCommit: OnClickCommit;
};

export const LogsForDate: VFC<Props> = ({ logs, onClickCommit }) => {
  if (logs.length === 0) return <>No Logs</>;

  const { createdAt: createdDate } = logs[0];

  return (
    <div css={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
    }}>
      <div css={{
        color: colors.text,
        fontSize: font.size.S,
        marginBottom: '8px',
      }}>{makeFormalDateString(createdDate)}</div>
      <ul css={{
        width: '70%',
        '> li': {
          marginBottom: '32px',
        },
      }}>
        {logs.map((log) => <li key={log.id}>
                                  <LogCard log={log} />
                                </li>)}
      </ul>
    </div>
  );
};
