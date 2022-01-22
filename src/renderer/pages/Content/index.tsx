import { VFC, useContext, useEffect } from 'react';

import { ContentContext } from '~/components/ContentContextProvider';

import { getContent } from '~/api';

import { useParams } from 'react-router-dom';

import { ModalToSelectTags } from '~/components';

import { Header } from '../Header';

import { ContentDetails, ContentBlocks } from './components';

import { container } from './style/container';

export const Content: VFC = () => {
  const { contentId } = useParams<{ contentId: string }>();
  const { content, setContent } = useContext(ContentContext);

  useEffect(() => {
    (async () => {
      const result = await getContent(Number(contentId));
      setContent(result);
    })();

  }, [contentId]);
  
  if (content === null) return <></>;

  return (
    <>
    <ModalToSelectTags />
    <Header />
      <div css={container}>
        <ContentDetails />
        <ContentBlocks blocks={content.blocks} />
      </div>
    </>
  );
}; 
