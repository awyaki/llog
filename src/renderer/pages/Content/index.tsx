import { VFC, useContext, useEffect } from 'react';

import { 
  ContentContext, 
  ModalToUpdateContentTags,
  ModalToCreateTag,
  Menu,
  ContentMenu,
  NormalButton,
} from '~/components';

import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';


import { getContent } from '~/api';

import { useParams } from 'react-router-dom';

import { NotFoundPage } from '~/pages';

import { pageTitle, container } from '~/pages/style';

import { 
  BasicInfo
} from './components';


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
      <ContentMenu contentId={content.id} />
      <div css={container}>
        <NormalButton css={{ marginBottom: '16px' }}>
          Update
        </NormalButton>
        <h1 css={{ ...pageTitle, marginBottom: '8px' }}>{content.name}</h1>
        <Tabs>
          <TabList>
            <Tab>Basic Info.</Tab>
            <Tab>Blocks Table</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <BasicInfo content={content} />
            </TabPanel>
            <TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}; 
