import { 
  VFC, 
  useState,
  useCallback,
  useMemo,
} from 'react';


import { calculateNumberArrayOfEachLevel } from '~/functions';

import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';

import { ContentWithRelation } from '~/pages/type';


import { pageTitle } from '~/pages/style';

import { 
  BlockLevelPieChart,
  BlockLevelPieChartData
  } from '~/components/Charts';

import { 
  BasicInfo,
  ContentBlocks,
  ViewSwitch,
  AccordionToUpdateContent
} from './components';


type Props = {
  content: ContentWithRelation;
};

export const Content: VFC<Props> = ({ content }) => {
  const [isOverView, setIsOverView] = useState(true);
  

  const onSwitch = useCallback(() => {
    setIsOverView((prev) => !prev);
  }, []); 
  
  const blockLevelPieChartData: BlockLevelPieChartData = useMemo(() => {
    return calculateNumberArrayOfEachLevel(content.blocks)
              .map((value, index) => ({ name: `Level ${index}`, value }));
  }, [content]);

  return (
      <>
        <AccordionToUpdateContent content={content} />
        <h1 css={{ ...pageTitle, marginBottom: '8px' }}>{content.name}</h1>
        <Tabs>
          <TabList>
            <Tab>Basic Info.</Tab>
            <Tab>Blocks Table</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <BasicInfo content={content} />
              <BlockLevelPieChart data={[]} />
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
  );
}; 
