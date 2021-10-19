import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'destyle.css';
import App from './components/App/App';
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

