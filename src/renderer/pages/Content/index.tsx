import { VFC, useContext, useEffect } from 'react';

import { 
  ContentContext, 
  ModalToUpdateContentTags,
  ModalToCreateTag,
  Menu
} from '~/components';

import { getContent } from '~/api';

import { useParams } from 'react-router-dom';

import { NotFoundPage } from '~/pages';

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
  
  if (content === null) return <NotFoundPage />;

  return (
    <div css={{ display: 'flex' }}>
    <ModalToUpdateContentTags contentId={content.id}/>
    <ModalToCreateTag />
    <Menu />
      <div css={container}>
        <ContentDetails css={{ marginRight: '48px' }} />
        <ContentBlocks 
          css={{ width: '60%' }}
          blocks={content.blocks} />
      </div>
    </div>
  );
}; 
