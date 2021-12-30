import { VFC } from 'react';

import { makeFormalDateString, dateToString } from '~/utils';

import { LogWithRelation } from '~/pages/type';

import { NoteWithContentName } from '~/components';

import { Box } from '@chakra-ui/react';

import { dateStyle, container, listStyle } from './style';

import { OnClickCommit } from '~/pages/Logs/type';


type Props = {
  logs: LogWithRelation[];
  onClickCommit: OnClickCommit;
};

export const LogsForDate: VFC<Props> = ({ logs, onClickCommit }) => {
  if (logs.length === 0) return <></>;

  const { createdAt: createdDate } = logs[0];

  return (
    <Box css={container}>
      <div css={dateStyle}>{makeFormalDateString(createdDate)}</div>
      <ul css={listStyle}>
        {logs.map(({ id, markdown, html, contentName, tags, blocks, createdAt, noteId, contentId }) => <li key={id}>
                                                            <NoteWithContentName 
                                                              contentName={contentName}
                                                              updatedAt={dateToString(createdAt)}
                                                              html={html}
                                                              tags={tags}
                                                              blocks={blocks}
                                                              onClickCommit={() => onClickCommit(markdown, html, blocks, tags, contentName, noteId, contentId)} />
                                                            </li>)}
      </ul>
    </Box>
  );
};
