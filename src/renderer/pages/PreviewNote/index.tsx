import { VFC  } from 'react';

import { Header } from '../Header';

import { Box } from '@chakra-ui/react';

import { makeFormalDateString } from '~/utils';

import { NoteWithContentName } from '~/components';

import { container, pageTitle } from '~/pages/style';

import { usePreviewNote } from './hooks';

export const PreviewNote: VFC = () => {
  const  note = usePreviewNote();
  if (note === null) return <></>;
  const { blocks, tags, contentName, transformed, updatedAt } = note;
  return (
    <>
      <Header />
      <Box css={container}>
        <h2 css={pageTitle}>Preview Note</h2>
        <NoteWithContentName
          contentName={contentName}
          blocks={blocks}
          tags={tags}
          html={transformed}
          updatedAt={makeFormalDateString(updatedAt)}
        />
      </Box>
    </>
  );
};
