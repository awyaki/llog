import { VFC, useState, useContext, useCallback, useEffect } from 'react';

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
  const { noteId } = useParams<{ noteId: string | undefined }>();
  const content = useContext(ContentContext);
  const [note, setNote] = useState<NoteWithRelation | null>(null);
  const [mode, setMode] = useState<Mode>('edit');
  const [markdown, setMarkdown] = useState('');
  
  const history = useHistory();

  const { isOpen: isOpenSelectBlocks, 
          onOpen: onOpenSelectBlocks,
          onClose: onCloseSelectBlocks } = useDisclosure();

  const { isOpen: isOpenSelectTags, 
          onOpen: onOpenSelectTags,
          onClose: onCloseSelectTags } = useDisclosure();

  const { isOpen: isOpenCreateNewTag, 
          onOpen: onOpenCreateNewTag,
          onClose: onCloseCreateNewTag } = useDisclosure();

  useEffect(() => {
    (async () => {
      if (noteId !== undefined) {
        const result = await getNote(Number(noteId));
        console.log('CreateNote', result);
        setNote(result);
      }
    })();
  }, [noteId]);

  const setToEdit = useCallback(() => {
    setMode('edit');
  }, []);
  
  const setToPreview = useCallback(() => {
    setMode('preview');
  }, []);
  
  const handleLink = useCallback((path: string, isNoteChange: boolean) => () => {
    if (isNoteChange) {
      if (confirmer()) {
        history.push(path);
        return;
      }
      return;
    }
    
    history.push(path);

  }, [history]);

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
            defaultTags={content?.tags ?? []}
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
