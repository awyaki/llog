import { 
  VFC, 
  useState,
  useCallback,
  useMemo,
} from 'react';

import { CSSObject } from '@emotion/react';

import { Switch, NormalButton } from '~/components';


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
  UpdateContent
} from './components';


type ToggleButtonProps = {
  css?: CSSObject;
  onToggleOpen: () => void;
};

const ToggleButton: VFC<ToggleButtonProps> = ({ onToggleOpen, ...rest }) => {
  return (
    <NormalButton 
      {...rest}
      onClick={onToggleOpen}>
      Update
    </NormalButton>
  );
};

type ContentProps = {
  content: ContentWithRelation;
};

export const Content: VFC<ContentProps> = ({ content }) => {
  const [isOverView, setIsOverView] = useState(true);
  const [isOpenUpdateContentForm, setIsOpenUpdateContentForm] = useState(false); 

  const onSwitch = useCallback(() => {
    setIsOverView((prev) => !prev);
  }, []); 
  
  const blockLevelPieChartData: BlockLevelPieChartData = useMemo(() => {
    return calculateNumberArrayOfEachLevel(content.blocks)
              .map((value, index) => ({ name: `Level ${index}`, value }));
  }, [content]);

  
  const handleCloseUpdateContentForm = useCallback(() => {
    setIsOpenUpdateContentForm(false);
  }, [setIsOpenUpdateContentForm]);

  
  const handleToggleIsOpenUpdateContentForm = useCallback(() => {
    setIsOpenUpdateContentForm((p) => !p);
  }, [setIsOpenUpdateContentForm]);

  return (
    <>
      <div css={{ display: 'flex', height: '100%' }}>
        <div css={{ flexGrow: 1 }}>
          <ToggleButton 
            css={{ marginBottom: '8px' }}
            onToggleOpen={handleToggleIsOpenUpdateContentForm} />
          <h1 css={{ ...pageTitle, marginBottom: '8px' }}>{content.name}</h1>
          <Tabs>
            <TabList>
              <Tab>Basic Info.</Tab>
              <Tab>Blocks Table</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <BasicInfo 
                  css={{ marginBottom: '32px' }}
                  content={content} />
                <h2 css={{ marginBottom: '32px' }}>Levels Chart</h2>
                <BlockLevelPieChart data={blockLevelPieChartData} />
              </TabPanel>
              <TabPanel>
              <Switch 
                css={{ marginBottom: '16px' }}
                isOn={!isOverView}
                onClick={onSwitch} />
                <ContentBlocks 
                  css={{ overflowY: 'scroll', height: '60vh' }}
                  isOverView={isOverView}
                  blocks={content.blocks} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <UpdateContent 
          isOpen={isOpenUpdateContentForm}
          onClose={handleCloseUpdateContentForm}
          content={content} />
      </div>
    </>
  );
}; 
