import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'destyle.css';
import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { TagContextProvider } from './DBContextProviders';
import { NotifierContextProvider, ContentsContextProvider } from './components';
import { theme } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <TagContextProvider>
      <NotifierContextProvider>
        <ContentsContextProvider>
          <App />
        </ContentsContextProvider>
      </NotifierContextProvider>
      </TagContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

