import { VFC, useState } from 'react';

import { ContentDetails } from './components/ContentDetails';
import { ContentBlocks } from './components/ContentBlocks';

import { container } from './style/container';

export const Content: VFC = () => {
  const [mode, setMode] = useState<'detailview' | 'overview'>('overview');
  return (
    <div css={container}>
      <ContentDetails 
        mode={mode}
        setMode={setMode} />
      <ContentBlocks 
        mode={mode} />
    </div>
  );
}; 
