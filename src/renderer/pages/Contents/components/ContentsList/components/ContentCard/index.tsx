import { VFC } from 'react';

import { Content } from '@prisma/client';

import { Box } from '@chakra-ui/react';

import { makeFormalDateString } from '~/utils';

import { 
  container,
  contentName,
  dateStyle,
  } from './style';

type Props = Pick<Content, 'name' | 'createdAt'>;

export const ContentCard: VFC<Props> = ({ 
  createdAt, 
  name,
}) => {
  return (
    <Box css={container}>
      <div css={dateStyle}>{makeFormalDateString(createdAt)}</div>
      <h2 css={contentName}>{name}</h2>
    </Box>
  );
};
