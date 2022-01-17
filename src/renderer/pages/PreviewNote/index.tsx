import { VFC } from 'react';

import { Header } from '../Header';

import { Box } from '@chakra-ui/react';

import { container, pageTitle } from '~/pages/style';

export const PreviewNote: VFC = () => {
  return (
    <>
      <Header />
      <Box css={container}>
        <h2 css={pageTitle}>Preview Note</h2>
      </Box>
    </>
  );
};
