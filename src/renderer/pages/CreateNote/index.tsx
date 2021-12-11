import { VFC } from 'react';

import { Box } from '@chakra-ui/react';

import { InfoButton } from './components/InfoButton';

import { container } from '~/pages/style/container';

export const CreateNote: VFC = () => {
  return (
    <Box css={container}>
      <InfoButton />
    </Box>
  );
};
