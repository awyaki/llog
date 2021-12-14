import { VFC, useRef, useState } from 'react';
import AceEditor from 'react-ace';


import { Box } from '@chakra-ui/react';

import { container } from './style/container';

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";

type Props = {
  width?: string;
  height?: string;
};

export const MarkdownEditor: VFC<Props> = ({ width, height }) => {
  const [markdown, setMarkdown] = useState('');
  const [mode, setMode] = useState<'vim' | ''>('');
  const editorRef = useRef<AceEditor>(null);
  const handleChange = (value: string) => {
    setMarkdown(value);
  };
  
  return (
      <Box css={container}>
        <AceEditor
          ref={editorRef}
          mode="markdown"
          theme="github"
          onChange={handleChange}
          width={ width ?? "100%"}
          height={ height ?? "43vh"}
          tabSize={2}
          fontSize={18}
          showPrintMargin={true}
          showGutter={false}
          highlightActiveLine={false}
          value={markdown}
          wrapEnabled={true}
          keyboardHandler={mode}
        />
      </Box>
  );
};
