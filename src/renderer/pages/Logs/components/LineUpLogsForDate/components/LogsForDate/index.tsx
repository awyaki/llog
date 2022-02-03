import { VFC } from 'react';

import { makeFormalDateString, makeFormalTimeString } from '~/utils';

import { LogWithRelation } from '~/pages/type';

import { NoteWithContentName } from '~/components';

import { dateStyle, container, listStyle } from './style';

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
      <div css={dateStyle}>{makeFormalDateString(createdDate)}</div>
      <ul css={listStyle}>
        {logs.map(({ id, markdown, html, contentName, tags, blocks, createdAt, noteId, contentId }) => <li key={id}>
                                                            <NoteWithContentName 
                                                              contentName={contentName}
                                                              updatedAt={makeFormalTimeString(createdAt)}
                                                              html={html}
                                                              tags={tags}
                                                              blocks={blocks}
                                                              onClickCommit={() => onClickCommit(markdown, html, blocks, tags, contentName, noteId, contentId)} />
                                                            </li>)}
      </ul>
    </div>
  );
};
