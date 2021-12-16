import { VFC, useState, useContext } from 'react';

import { Tag } from '@prisma/client';

import { ContentContext } from '../ContentContextProvider';

import { Box, Heading, HStack, useDisclosure } from '@chakra-ui/react';

import { Header } from './components/Header';
import { InfoButton } from './components/InfoButton';
import { ShowNoteButton } from './components/ShowNotesButton';
import { Note } from './components/Note';
import { ModalToSelectBlocks } from './components/ModalToSelectBlocks';


import { container } from '~/pages/style/container';


export const CreateNote: VFC = () => {
  const content = useContext(ContentContext);
  const { isOpen: isOpenSelectBlocks, 
          onClose: onCloseSelectBlocks } = useDisclosure();

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  
  return (
    <>
      <Header isNoteChange={true} />
      <HStack __css={container} alignItems="start">
        <HStack>
          <Box width="55vw">
            <Heading as="h2" size="lg" mb="16px">{content?.name}</Heading>
            <HStack width="120px" mb="16px">
              <InfoButton />
              <ShowNoteButton />
            </HStack>
            <Note  
              tags={selectedTags} />
          </Box>
        </HStack>
      </HStack>
      <ModalToSelectBlocks 
        isOpen={isOpenSelectBlocks}
        onClose={onCloseSelectBlocks}
        blocks={content?.blocks ?? []} />
    </>
  );
};
