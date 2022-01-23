import { VFC, Dispatch, SetStateAction } from 'react';

import { CSSObject } from '@emotion/react';

import { Mode } from '../../types';

import { HStack } from '@chakra-ui/react';

import { MarkdownEditor } from './components/MarkdownEditor';
import { MarkdownPreview } from './components/MarkdownPreview';
import { ShowSaveDate } from './components/ShowSaveDate';

type Props = {
  mode: Mode;
  markdown: string;
  setMarkdown: Dispatch<SetStateAction<string>>;
  updatedAt: Date | undefined;
  isNoteChange: boolean;
  css?: CSSObject;
};

export const Note: VFC<Props> = ({ 
  mode,
  markdown,
  setMarkdown,
  updatedAt,
  isNoteChange,
  ...rest
}) => {
  return (
    <div {...rest}>
      <HStack justifyContent="center"  mb="16px">
        <ShowSaveDate notSaved={isNoteChange} date={updatedAt}/>
      </HStack>
      {mode === 'edit' 
          ? <MarkdownEditor 
              markdown={markdown}
              setMarkdown={setMarkdown} />
          : <MarkdownPreview 
              markdown={markdown}
            />}
    </div>
  );
};
