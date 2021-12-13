import { VFC } from 'react';

import { Block as BlockType } from '@prisma/client';

import { Box } from '@chakra-ui/react';

import { makeContainer } from '~/pages/style/block';


type Props = Pick<BlockType, 'level' | 'unitNumber'>;

export const Block: VFC<Props> = ({ level , unitNumber }) => {
  return (
    <div css={makeContainer(level)}><span>{unitNumber}</span></div>
  );
};
