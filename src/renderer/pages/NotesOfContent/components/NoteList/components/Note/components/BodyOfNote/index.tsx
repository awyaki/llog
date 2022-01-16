import { VFC } from 'react';

import { Box } from '@chakra-ui/react';

import 'zenn-content-css';

type Props = { 
  html: string;
};

export const BodyOfNote: VFC<Props> = ({ html }) => { 
  return (
    <Box h="400px" overflowY="hidden">
      <div className="znc" dangerouslySetInnerHTML={{ __html: html }}></div>
    </Box>
  );
};
