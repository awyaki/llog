import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'destyle.css';
import { App } from './App';
import { IsExpandModalProvider } from './components/IsExpandModalProvider';

ReactDOM.render(
  <React.StrictMode>
    <IsExpandModalProvider>
      <App />
    </IsExpandModalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

