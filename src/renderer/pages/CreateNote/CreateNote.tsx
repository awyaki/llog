import { VFC } from 'react';

import { Box, Heading, HStack } from '@chakra-ui/react';

import { InfoButton } from './components/InfoButton';
import { ShowNoteButton } from './components/ShowNotesButton';
import { Note } from './components/Note';


import { container } from '~/pages/style/container';


export const CreateNote: VFC = () => {

  const contentNameStub = 'コンパイラ原理と構造';

  return (
    <Box css={container}>
      <HStack>
        <Box width="55vw">
          <Heading as="h2" size="lg">{contentNameStub}</Heading>
          <InfoButton />
          <ShowNoteButton />
          <Note />
        </Box>
      </HStack>
    </Box>
  );
};
