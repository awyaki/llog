import { VFC, useState, useContext, useCallback } from 'react';

import { useHistory } from 'react-router-dom';
import { confirmer } from './functions';

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
  const history = useHistory();
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
  
  const handleLink = useCallback((path: string, isNoteChange: boolean) => () => {
    if (isNoteChange) {
      if (confirmer()) {
        history.push(path);
        return;
      }
      return;
    }
    
    history.push(path);

  }, [history]);

  return (
    <>
      <Header isNoteChange={true} confirmer={confirmer} />
      <Box __css={container}>
        <Heading as="h2" size="lg" mb="16px">{content?.name}</Heading>
        <HStack width="120px" mb="16px">
          <InfoButton onClick={handleLink(`/content/${content?.id}`, false)} />
          <ShowNoteButton onClick={handleLink(`/content/${content?.id}/notes`, true)}/>
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
