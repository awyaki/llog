import { VFC } from 'react';

import { Box, CSSObject } from '@chakra-ui/react';

import { Block as BlockType } from '@prisma/client';

import { Block } from './components/Block';

import { container } from './style/container';

type Props = {
  blocks: BlockType[];
} & CSSObject;

export const SelectedBlocks: VFC<Props> = ({ blocks, ...CSSObject }) => {
  return (
    <Box __css={CSSObject}>
      <ul css={container}>
        {blocks.map(({ id, level, unitNumber }) => <li key={id}><Block level={level} unitNumber={unitNumber} /></li>)}
      </ul>
    </Box>
  );
};
