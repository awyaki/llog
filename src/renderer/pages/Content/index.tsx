import { 
  VFC, 
  useContext, 
  useState,
  useCallback,
} from 'react';

import { 
  ContentContext, 
  ModalToUpdateContentTags,
  ModalToCreateTag,
  NormalButton,
} from '~/components';

import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';

import { NotFoundPage } from '~/pages';

import { pageTitle } from '~/pages/style';

import { 
  BasicInfo,
  ContentBlocks,
  ViewSwitch
} from './components';


export const Content: VFC = () => {
  const { content } = useContext(ContentContext);
  console.log(`Content`, content);
  const [isOverView, setIsOverView] = useState(true);

  const onSwitch = useCallback(() => {
    setIsOverView((prev) => !prev);
  }, []); 

  if (content === null) return <NotFoundPage />;

  return (
    <>
      <ModalToUpdateContentTags contentId={content.id}/>
      <ModalToCreateTag />
      <>
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
                css={{ overflowY: 'scroll', height: '60vh' }}
                isOverView={isOverView}
                blocks={content.blocks} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </>
    </>
  );
}; 
