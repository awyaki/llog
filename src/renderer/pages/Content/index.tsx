import { 
  VFC, 
  useContext, 
  useEffect,
  useState,
  useCallback,
} from 'react';

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
  BasicInfo,
  ContentBlocks,
  ViewSwitch
} from './components';


export const Content: VFC = () => {
  const { contentId } = useParams<{ contentId: string }>();
  const { content, setContent } = useContext(ContentContext);
  const [isOverView, setIsOverView] = useState(true);

  useEffect(() => {
    (async () => {
      const result = await getContent(Number(contentId));
      setContent(result);
    })();

  }, [contentId]);
 
  const onSwitch = useCallback(() => {
    setIsOverView((prev) => !prev);
  }, []); 

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
              <ViewSwitch 
                css={{ marginBottom: '16px' }}
                isOverView={isOverView} 
                onSwitch={onSwitch} />
              <ContentBlocks 
                isOverView={isOverView}
                blocks={content.blocks} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}; 
