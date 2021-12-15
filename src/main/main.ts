import path from 'path'
import { app, BrowserWindow }  from 'electron';
import { useDBQueryOnClient } from './db';
import { useMarkdownToHTML } from './useMarkdownToHTML';

useDBQueryOnClient();
useMarkdownToHTML();

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, 'preload.js'),
    },
  });

  win.loadFile(path.resolve(__dirname, 'index.html'));
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
