import { VFC, useContext } from 'react';

import { SelectedBlocksContext } from '~/pages/HandleNote/SelectedBlocksContextProvider';
import { Box, CSSObject } from '@chakra-ui/react';


import { Block } from './components/Block';
import { SelectBlockButton } from './components/SelectBlockButton';

import { container } from './style/container';

type Props = CSSObject;

export const SelectedBlocks: VFC<Props> = ({ ...CSSObject }) => {
  const { selectedBlocks } = useContext(SelectedBlocksContext);
  return (
    <Box __css={CSSObject}>
      <ul css={container}>
        {selectedBlocks.map(({ id, level, unitNumber }) => <li key={id}><Block level={level} unitNumber={unitNumber} /></li>)}
        <li><SelectBlockButton /></li>
      </ul>
    </Box>
  );
};
