import { VFC, useState, MouseEventHandler } from 'react';

import { HStack, VStack, Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';

import { Mode } from './types';
import { ContentsList } from './components/ContentsList';

import { Conditions } from './components/Conditions';
import { CreateNewContent as NewContent } from './components/CreateNewContent';
import { CreateContentButton } from './components/CreateContentButton';
import { SearchContentsButton } from './components/SearchContentsButton';
import { CreateTagModal } from './components/CreateTagModal';

import { container } from './style/container';

type RightViewProps = {
  mode: Mode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const RightView: VFC<RightViewProps> = ({ mode, onClick }) => {
  return mode === 'Conditions' 
            ? <Conditions />
            : <NewContent onClick={onClick} />;
};

export const Contents: VFC = () => {
  const [mode, setMode] = useState<Mode>('NewContent');
  const { isOpen, onClose, onOpen } = useDisclosure();
  
  const handleClickNewContent = () => {
    setMode('NewContent');
  };

  const handleClickConditions = () => {
    setMode('Conditions');
  };

  return (
      <Box css={container}>
        <CreateTagModal isOpen={isOpen} onClose={onClose} />
        <Box>
          <Heading as="h2" size="lg" mb="32px">Contents</Heading>
          <Flex justify="space-between" w="130px" mb="16px">
            <CreateContentButton 
              active={mode === 'NewContent'}  
              onClick={handleClickNewContent}/>
            <SearchContentsButton 
              active={mode === 'Conditions'} 
              onClick={handleClickConditions} />
          </Flex>
          <ContentsList />
        </Box>
        <RightView 
          mode={mode}
          onClick={onOpen} />
      </Box>
  );
};
