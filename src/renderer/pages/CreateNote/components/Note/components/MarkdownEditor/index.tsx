import { VFC, useRef, useState, useEffect } from 'react';
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
    console.log("value was changed");
    setMarkdown(value);
  };

  useEffect(() => {
    const aceEditor = editorRef.current;
    if (aceEditor != null) {
      const lines = aceEditor.editor.getSession().getScreenLength();
      const lineHeight = (document.querySelector('.ace_line') as HTMLDivElement)
                          .style
                          .height
                          .replace('px', '');
      console.log('MarkdownEditor', lines, lineHeight);
      const newHeight = lines * Number(lineHeight);
      console.log('newHeight', newHeight);
      aceEditor.editor.container.style.height = `${newHeight}px`;
      aceEditor.editor.resize();
    }

  }, [markdown]);

  return (
      <Box __css={{ ...container, height: height, width: width }}>
        <AceEditor
          ref={editorRef}
          mode="markdown"
          theme="github"
          onChange={handleChange}
          width="100%"
          height="100px"
          tabSize={2}
          fontSize={16}
          showPrintMargin={true}
          showGutter={false}
          highlightActiveLine={false}
          value={markdown}
          wrapEnabled={true}
          setOptions={{ animatedScroll: false, highlightActiveLine: true }}
          keyboardHandler={mode}
        />
      </Box>
  );
};
