import { VFC, useContext, useEffect } from 'react';

import { 
  ContentContext, 
  ModalToUpdateContentTags,
  ModalToCreateTag,
  Menu,
  ContentMenu,
  TagsList,
  NormalButton,
} from '~/components';

import {
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
} from '@chakra-ui/react';

import { font } from '~/styleConfig';

import { getContent } from '~/api';

import { useParams } from 'react-router-dom';

import { NotFoundPage } from '~/pages';

import { makeFormalTimeString } from '~/utils';

import { pageTitle, container } from '~/pages/style';

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
                <TagsList 
                  css={{ marginBottom: '16px' }}
                  tags={content.tags} />
                <Table 
                  maxWidth="600px"
                  size="lg">
                  <Tbody>
                    <Tr>
                      <Th>Created Time</Th>
                      <Td>{makeFormalTimeString(content.createdAt)}</Td>
                    </Tr>
                    <Tr>
                      <Th>Blocks</Th>
                      <Td>{content.blocks.length}</Td>
                    </Tr>
                  </Tbody>
                </Table>
            </TabPanel>
            <TabPanel>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}; 
