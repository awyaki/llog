import { VFC, useState, useContext, useCallback } from 'react';

import { Mode } from './types';

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
  const [mode, setMode] = useState<Mode>('edit');
  const content = useContext(ContentContext);
  const { isOpen: isOpenSelectBlocks, 
          onOpen: onOpenSelectBlocks,
          onClose: onCloseSelectBlocks } = useDisclosure();
  
  const setToEdit = useCallback(() => {
    setMode('edit');
  }, []);
  
  const setToPreview = useCallback(() => {
    setMode('preview');
  }, []);

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
          <Note 
            mode={mode}
            minWidth="300px" 
            maxWidth="800px" 
            w="70%" 
            pr="6%" />
          <ControlBox 
            mode={mode}
            setToEdit={setToEdit}
            setToPreview={setToPreview}
            onOpenSelectBlocks={onOpenSelectBlocks}
          />
        </HStack>
      </Box>
      <ModalToSelectBlocks 
        isOpen={isOpenSelectBlocks}
        onClose={onCloseSelectBlocks}
        blocks={content?.blocks ?? []} />
    </>
  );
};
