import { VFC, useContext } from 'react';

import { ContentContext } from '../ContentContextProvider';

import { Header } from '../Header';
import { ContentDetails } from './components/ContentDetails';
import { ContentBlocks } from './components/ContentBlocks';

import { container } from './style/container';

export const Content: VFC = () => {
  const { content } = useContext(ContentContext);
  
  return (
    <>
    <Header />
      <div css={container}>
        <ContentDetails content={content} />
        <ContentBlocks blocks={content?.blocks ?? []} />
      </div>
    </>
  );
}; 
