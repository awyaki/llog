import { VFC, useState, useContext } from 'react';

import { Tag } from '@prisma/client';

import { ContentContext } from '../ContentContextProvider';

import { Box, Heading, HStack, useDisclosure } from '@chakra-ui/react';

import { 
  Header, 
  InfoButton, 
  ShowNoteButton, 
  Note, 
  ModalToSelectBlocks,
  ControlBox
} from './components';


import { container } from '~/pages/style/container';


export const CreateNote: VFC = () => {
  const content = useContext(ContentContext);
  const { isOpen: isOpenSelectBlocks, 
          onClose: onCloseSelectBlocks } = useDisclosure();

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  
  return (
    <>
      <Header isNoteChange={true} />
      <Box __css={container}>
        <Heading as="h2" size="lg" mb="16px">{content?.name}</Heading>
        <HStack width="120px" mb="16px">
          <InfoButton />
          <ShowNoteButton />
        </HStack>
        <HStack>
          <Note minWidth="300px" maxWidth="800px" w="70%" pr="6%" />
          <ControlBox />
        </HStack>
      </Box>
      <ModalToSelectBlocks 
        isOpen={isOpenSelectBlocks}
        onClose={onCloseSelectBlocks}
        blocks={content?.blocks ?? []} />
    </>
  );
};
