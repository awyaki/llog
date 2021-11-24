import { VFC, useState } from 'react';

import { Mode } from './types';
import { ContentsList } from './components/ContentsList';

import { Conditions } from './components/Conditions';
import { CreateNewContent as NewContent } from './components/CreateNewContent';

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
      <ContentsList />
      <RightView mode={mode} />
    </div>
  );
};
