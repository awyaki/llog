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
  const editorRef = useRef<AceEditor>(null);
  

  const handleChange = (value: string) => {
    setMarkdown(value);
  };

  useEffect(() => {
    const aceEditor = editorRef.current;
    if (aceEditor != null) {
      const defaultHeight = 300;

      const lines = aceEditor.editor.getSession().getScreenLength();
      const lineHeight = (document.querySelector('.ace_line') as HTMLDivElement)
                          .style
                          .height
                          .replace('px', '');

      const _newHeight = lines * Number(lineHeight);
      
      const newHeight = _newHeight > defaultHeight ? _newHeight : defaultHeight;

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
          height="500px"
          tabSize={2}
          fontSize={16}
          showPrintMargin={true}
          showGutter={false}
          highlightActiveLine={false}
          value={markdown}
          wrapEnabled={true}
        />
      </Box>
  );
};
