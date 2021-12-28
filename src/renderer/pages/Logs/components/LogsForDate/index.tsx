import { VFC } from 'react';

import { makeFormalDateString, dateToString } from '~/utils';

import { LogWithRelation } from '~/pages/type';

import { NoteWithContentName } from '~/components';

import { Box } from '@chakra-ui/react';

type Props = {
  logs: LogWithRelation[];
};

export const LogsForDate: VFC<Props> = ({ logs }) => {
  if (logs.length === 0) return <></>;

  const { createdAt: createdDate } = logs[0];

  return (
    <Box>
      <div>{makeFormalDateString(createdDate)}</div>
      <ul>
        {logs.map(({ html, contentName, tags, blocks, createdAt }) => <li>
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
