import { VFC, useContext, useEffect } from 'react';

import { 
  ContentContext, 
  ModalToUpdateContentTags,
  ModalToCreateTag,
} from '~/components';

import { getContent } from '~/api';

import { useParams } from 'react-router-dom';

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
    <ModalToUpdateContentTags contentId={content.id}/>
    <ModalToCreateTag />
    <Header />
      <div css={container}>
        <ContentDetails css={{ marginRight: '48px' }} />
        <ContentBlocks 
          css={{ width: '60%' }}
          blocks={content.blocks} />
      </div>
    </>
  );
}; 
