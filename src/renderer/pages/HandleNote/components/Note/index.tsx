import { VFC, Dispatch, SetStateAction } from 'react';

import { Mode } from '../../types';

import { Box, HStack, CSSObject } from '@chakra-ui/react';

import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkdownPreview } from './components/MarkdownPreview';
import { ShowSaveDate } from './components/ShowSaveDate';

type Props = {
  mode: Mode;
  markdown: string;
  setMarkdown: Dispatch<SetStateAction<string>>;
} & CSSObject;

export const Note: VFC<Props> = ({ 
  mode,
  markdown,
  setMarkdown,
  ...rest
}) => {
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
