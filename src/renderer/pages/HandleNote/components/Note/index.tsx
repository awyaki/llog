import { VFC, useState } from 'react';

import { Box, HStack, CSSObject } from '@chakra-ui/react';

import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkdownPreview } from './components/MarkdownPreview';
import { ShowSaveDate } from './components/ShowSaveDate';

type Props = CSSObject;

export const Note: VFC<Props> = (props) => {
  const [markdown, setMarkdown] = useState(''); 
  const [mode, setMode] = useState<'edit' | 'preview'>('edit'); 

  return (
    <Box __css={props}>
      <HStack justifyContent="center"  mb="16px">
        <ShowSaveDate notSaved={true} date={new Date()}/>
      </HStack>
      {mode === 'edit' 
          ? <MarkdownEditor 
              markdown={markdown}
              setMarkdown={setMarkdown} />
          : <MarkdownPreview 
              markdown={markdown}
            />}
    </Box>
  );
};
