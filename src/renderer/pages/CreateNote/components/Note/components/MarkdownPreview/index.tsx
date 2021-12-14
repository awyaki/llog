import { VFC, createElement } from 'react';

import { Box } from '@chakra-ui/react';
import { container } from './style/container';

import 'zenn-content-css';

type Props = {
  markdown: string;
};

export const MarkdownPreview: VFC<Props> = ({ markdown }) => {

  return (
    <Box __css={container} className="znc">
      <h1>Hoge</h1>
    </Box>
  );
};
