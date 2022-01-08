import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'destyle.css';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { TagContextProvider } from './DBContextProviders';
import { NotifierContextProvider, SelectedTagsContextProvider } from './components';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TagContextProvider>
      <NotifierContextProvider>
        <SelectedTagsContextProvider>
          <App />
        </SelectedTagsContextProvider>
      </NotifierContextProvider>
      </TagContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

