import { VFC } from 'react';

import { Block as BlockType } from '@prisma/client';

import { makeContainer } from '~/pages/style/block';


type Props = Pick<BlockType, 'level' | 'unitNumber'>;

export const Block: VFC<Props> = ({ level , unitNumber }) => {
  return (
    <div css={makeContainer(level)}>{unitNumber}</div>
  );
};
