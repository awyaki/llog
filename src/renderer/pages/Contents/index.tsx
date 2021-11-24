import { VFC, useState } from 'react';

import { HStack, VStack } from '@chakra-ui/react';

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

  return (
    <div css={container}>
      <VStack>
        <HStack>
          <CreateContentButton active={true} />
          <SearchContentsButton active={true} />
        </HStack>
        <ContentsList />
      </VStack>
      <RightView mode={mode} />
    </div>
  );
};
