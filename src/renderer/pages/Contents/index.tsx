import { VFC, useState, MouseEventHandler } from 'react';

import { pageTitle } from '~/pages/style/pageTitle';

import { ContentsContextProvider } from './ContentsContextProvider';

import { Box, Flex, useDisclosure } from '@chakra-ui/react';

import { Mode } from './types';
import { ContentsList } from './components/ContentsList';

import { Header } from '../Header';
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
      <ContentsContextProvider>
        <Header />
        <Box css={container}>
          <CreateTagModal isOpen={isOpen} onClose={onClose} />
          <Box>
            <h2 css={pageTitle}>Contents</h2>
            <Flex justify="space-between" w="120px" mb="16px">
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
      </ContentsContextProvider>
  );
};
