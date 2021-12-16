import { VFC, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import AceEditor from 'react-ace';


import { Box } from '@chakra-ui/react';

import { container } from './style/container';

import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";

type Props = {
  markdown: string;
  setMarkdown: Dispatch<SetStateAction<string>>;
};

export const MarkdownEditor: VFC<Props> = ({ markdown, setMarkdown }) => {
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
      <Box __css={container}>
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