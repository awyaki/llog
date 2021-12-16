import { VFC, useState } from 'react';

import { Mode } from '../../types';

import { Box, HStack, CSSObject } from '@chakra-ui/react';

import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkdownPreview } from './components/MarkdownPreview';
import { ShowSaveDate } from './components/ShowSaveDate';

type Props = {
  mode: Mode
} & CSSObject;

export const Note: VFC<Props> = ({ mode, ...rest }) => {
  const [markdown, setMarkdown] = useState(''); 

  return (
    <Box __css={rest}>
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
