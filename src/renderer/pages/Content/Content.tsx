import { VFC, useState, useContext } from 'react';

import { ContentContext } from '../ContentContextProvider';

import { Header } from '../Header';
import { ContentDetails } from './components/ContentDetails';
import { ContentBlocks } from './components/ContentBlocks';

import { container } from './style/container';

export const Content: VFC = () => {
  const [mode, setMode] = useState<'detailview' | 'overview'>('overview');
  const content = useContext(ContentContext);
  
  return (
    <>
    <Header />
      <div css={container}>
        <ContentDetails 
          content={content}
          mode={mode}
          setMode={setMode} />
        <ContentBlocks 
          blocks={content?.blocks ?? []}
          mode={mode} />
      </div>
    </>
  );
}; 
