import { VFC, useState } from 'react';

import { HStack, VStack, Box, Flex, Heading } from '@chakra-ui/react';

import { Mode } from './types';
import { ContentsList } from './components/ContentsList';

import { Conditions } from './components/Conditions';
import { CreateNewContent as NewContent } from './components/CreateNewContent';
import { CreateContentButton } from './components/CreateContentButton';
import { SearchContentsButton } from './components/SearchContentsButton';

import { container } from './style/container';

type RightViewProps = {
  mode: Mode;
};

const RightView: VFC<RightViewProps> = ({ mode }) => {
  return mode === 'Conditions' 
            ? <Conditions />
            : <NewContent />;
};

export const Contents: VFC = () => {
  const [mode, setMode] = useState<Mode>('NewContent');
  
  const handleClickNewContent = () => {
    setMode('NewContent');
  };

  const handleClickConditions = () => {
    setMode('Conditions');
  };

  return (
      <Box css={container}>
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
        <RightView mode={mode} />
      </Box>
  );
};
