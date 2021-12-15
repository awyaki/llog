import { VFC } from 'react';

import { Box, Heading, HStack } from '@chakra-ui/react';

import { Header } from './components/Header';
import { InfoButton } from './components/InfoButton';
import { ShowNoteButton } from './components/ShowNotesButton';
import { Note } from './components/Note';


import { container } from '~/pages/style/container';


export const CreateNote: VFC = () => {

  const contentNameStub = 'コンパイラ原理と構造';

  return (
    <>
      <Header isNoteChange={true} />
      <Box css={container}>
        <HStack>
          <Box width="55vw">
            <Heading as="h2" size="lg" mb="16px">{contentNameStub}</Heading>
            <HStack width="120px" mb="16px">
              <InfoButton />
              <ShowNoteButton />
            </HStack>
            <Note />
          </Box>
        </HStack>
      </Box>
    </>
  );
};
