import { VFC } from 'react';

import { useEditNote } from './hooks';


import { pageTitle } from '~/pages/style';

import { confirmer } from './functions';



import { Box, HStack } from '@chakra-ui/react';

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
          isNoteChange,
          isOpenSelectBlocks,
          onOpenSelectBlocks,
          onCloseSelectBlocks,
          isOpenSelectTags,
          onOpenSelectTags,
          onCloseSelectTags,
          isOpenCreateNewTag,
          onOpenCreateNewTag,
          onCloseCreateNewTag,
          onCreateNote,
          setToEdit,
          setToPreview,
          handleLink,
        } = useEditNote();
  
  console.log('CreateNote: isNoteChange', isNoteChange);
  return (
    <>
      <Header isNoteChange={isNoteChange} confirmer={confirmer} />
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
            updatedAt={note?.updatedAt}
            isNoteChange={isNoteChange}
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
            onOpenCreateNewTag={onOpenCreateNewTag}
            onCreateNote={onCreateNote} />
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
