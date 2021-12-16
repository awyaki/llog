import { VFC, useState, useContext } from 'react';

import { Tag, Block } from '@prisma/client';

import { ContentContext } from '../ContentContextProvider';

import { Box, Heading, HStack } from '@chakra-ui/react';

import { Header } from './components/Header';
import { InfoButton } from './components/InfoButton';
import { ShowNoteButton } from './components/ShowNotesButton';
import { Note } from './components/Note';
import { SelectBlocks } from './components/SelectBlocks';


import { container } from '~/pages/style/container';


export const CreateNote: VFC = () => {
  const content = useContext(ContentContext);
  
  const [selectedBlocks, setSelectedBlocks] = useState<Block[]>([]);
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
              blocks={selectedBlocks}
              tags={selectedTags} />
          </Box>
        </HStack>
        <Box ml="32px">
          <Heading size="lg" mb="16px">Blocks</Heading>
          <SelectBlocks blocks={content?.blocks ?? []} />
        </Box>
      </HStack>
    </>
  );
};
