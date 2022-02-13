import path from 'path'
import { 
    app, 
    BrowserWindow,
    shell,
}  from 'electron';
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
      sandbox: true,
    },
  });
   
  win.loadFile(path.resolve(__dirname, 'index.html'));
  // win.webContents.openDevTools();
  win.webContents.on('will-navigate', (e, url) => {
    e.preventDefault();
    shell.openExternal(url);
  });
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
