import { 
  FC,
  useState,
  createContext,
  Dispatch,
  SetStateAction
  } from 'react';

type ProvidedMarkdownForHandleNoteContext = {
  markdown: string;
  setMarkdown: Dispatch<SetStateAction<string>>;
};

export const MarkdownForHandleNoteContext = createContext<ProvidedMarkdownForHandleNoteContext>({
  markdown: '',
  setMarkdown: () => {},
});

export const MarkdownForHandleNoteContextProvider: FC = ({ children }) => {
  const [markdown, setMarkdown] = useState('');
  

  return (
    <MarkdownForHandleNoteContext.Provider value={{ markdown, setMarkdown }}>
      {children}
    </MarkdownForHandleNoteContext.Provider>
  ); 
};

