import { VFC, useRef, useState } from 'react';
import AceEditor from 'react-ace';


import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";


export const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [mode, setMode] = useState<'vim' | ''>('');
  const editor = useRef<AceEditor>(null);
   
  const handleChange = (value: string) => {
    setMarkdown(value);
  };
  
  return (
      <AceEditor
        ref={editor}
        mode="markdown"
        theme="github"
        onChange={handleChange}
        width="100%"
        height="500px"
        tabSize={2}
        fontSize={14}
        showPrintMargin={true}
        showGutter={false}
        highlightActiveLine={false}
        value={markdown}
        wrapEnabled={true}
        keyboardHandler={mode}
      />
  );
};
