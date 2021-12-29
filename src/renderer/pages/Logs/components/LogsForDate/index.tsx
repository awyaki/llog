import { VFC } from 'react';

import { makeFormalDateString, dateToString } from '~/utils';

import { LogWithRelation } from '~/pages/type';

import { NoteWithContentName } from '~/components';

import { Box } from '@chakra-ui/react';

import { dateStyle, container } from './style';

type Props = {
  logs: LogWithRelation[];
};

export const LogsForDate: VFC<Props> = ({ logs }) => {
  if (logs.length === 0) return <></>;

  const { createdAt: createdDate } = logs[0];

  return (
    <Box css={container}>
      <div css={dateStyle}>{makeFormalDateString(createdDate)}</div>
      <ul css={{ width: '70%' }}>
        {logs.map(({ id, html, contentName, tags, blocks, createdAt }) => <li key={id}>
                                                            <NoteWithContentName 
                                                              contentName={contentName}
                                                              updatedAt={dateToString(createdAt)}
                                                              html={html}
                                                              tags={tags}
                                                              blocks={blocks} />
                                                            </li>)}
      </ul>
    </Box>
  );
};
