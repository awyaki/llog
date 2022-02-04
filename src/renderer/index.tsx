import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom';
import './index.css';
import 'destyle.css';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { TagContextProvider } from './DBContextProviders';
import { 
  NotifierContextProvider,
  ContentsContextProvider,
  IsAllowTransitionContextProvider,
  MarkdownForHandleNoteContextProvider,
  SelectedBlocksForHandleNoteContextProvider,
  SelectedTagsForHandleNoteContextProvider
} from './components';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme={theme}>
        <TagContextProvider>
        <NotifierContextProvider>
          <ContentsContextProvider>
            <IsAllowTransitionContextProvider>
              <MarkdownForHandleNoteContextProvider>
                <SelectedBlocksForHandleNoteContextProvider>
                  <SelectedTagsForHandleNoteContextProvider>
                    <App />
                  </SelectedTagsForHandleNoteContextProvider>
                </SelectedBlocksForHandleNoteContextProvider>
              </MarkdownForHandleNoteContextProvider>
            </IsAllowTransitionContextProvider>
          </ContentsContextProvider>
        </NotifierContextProvider>
        </TagContextProvider>
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

