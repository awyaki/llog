import { VFC  } from 'react';

import { Header } from '../Header';

import { TagList, BlockList } from './components';

import { Box } from '@chakra-ui/react';

import { container, pageTitle } from '~/pages/style';

import { usePreviewNote } from './hooks';

import { noteStyle } from './style';

export const PreviewNote: VFC = () => {
  const  note = usePreviewNote();
  if (note === null) return <></>;
  const { blocks, tags, contentName, transformed, updatedAt } = note;
  return (
    <>
      <Header />
      <Box css={container}>
        <h2 css={pageTitle}>{contentName}</h2>
        <Box css={noteStyle}>
          <TagList tags={tags} />
          <BlockList blocks={blocks} />
        </Box>
      </Box>
    </>
  );
};
