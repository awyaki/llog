import { VFC, useState, useContext, useCallback, useEffect } from 'react';

import { useEditNote } from './hooks';

import { getNote } from '~/api';

import { pageTitle } from '~/pages/style';

import { useHistory, useParams } from 'react-router-dom';
import { confirmer } from './functions';

import { Mode } from './types';
import { NoteWithRelation } from '~/pages/type';

import { ContentContext } from '../ContentContextProvider';

import { Box, HStack, useDisclosure } from '@chakra-ui/react';

import { 
  Header, 
  InfoButton, 
  ShowNoteButton, 
  Note, 
  ModalToSelectBlocks,
  ModalToSelectTags,
  ModalToCreateNewTag,
  ControlBox
} from './components';


import { container } from '~/pages/style/container';


export const CreateNote: VFC = () => {
  const { content, 
          note, 
          mode, 
          markdown,
          setMarkdown,
          defaultTags,
          isOpenSelectBlocks,
          onOpenSelectBlocks,
          onCloseSelectBlocks,
          isOpenSelectTags,
          onOpenSelectTags,
          onCloseSelectTags,
          isOpenCreateNewTag,
          onOpenCreateNewTag,
          onCloseCreateNewTag,
          setToEdit,
          setToPreview,
          handleLink,
        } = useEditNote();

  return (
    <>
      <Header isNoteChange={true} confirmer={confirmer} />
      <Box __css={container}>
        <h2 css={pageTitle}>{content?.name}</h2>
        <HStack width="120px" mb="16px">
          <InfoButton onClick={handleLink(`/content/${content?.id}`, false)} />
          <ShowNoteButton onClick={handleLink(`/content/${content?.id}/notes`, true)}/>
        </HStack>
        <HStack>
          <Note 
            mode={mode}
            markdown={markdown}
            setMarkdown={setMarkdown}
            minWidth="300px" 
            maxWidth="800px" 
            w="70%" 
            pr="6%" />
          <ControlBox 
            mode={mode}
            defaultTags={defaultTags}
            setToEdit={setToEdit}
            setToPreview={setToPreview}
            onOpenSelectBlocks={onOpenSelectBlocks}
            onOpenSelectTags={onOpenSelectTags}
            onOpenCreateNewTag={onOpenCreateNewTag} />
        </HStack>
      </Box>
      <ModalToSelectBlocks 
        isOpen={isOpenSelectBlocks}
        onClose={onCloseSelectBlocks}
        blocks={content?.blocks ?? []} />
      <ModalToSelectTags 
        isOpen={isOpenSelectTags}
        onClose={onCloseSelectTags} />
      <ModalToCreateNewTag 
        isOpen={isOpenCreateNewTag}
        onClose={onCloseCreateNewTag} />
    </>
  );
};
