import path from "path";
import { app, BrowserWindow, shell } from "electron";

import { useDBQueryOnClient } from "./db";

import { useMarkdownToHTML } from "./useMarkdownToHTML";

useDBQueryOnClient();
useMarkdownToHTML();

const handleURLOpen = (e: Electron.Event, url: string) => {
  e.preventDefault();
  shell.openExternal(url);
};

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      preload: path.resolve(__dirname, "../preload/preload.js"),
      sandbox: true,
    },
  });

  win.loadFile(path.resolve(__dirname, "../renderer/index.html"));
  // win.webContents.openDevTools();

  win.webContents.on("will-navigate", handleURLOpen);
  win.webContents.on("new-window", handleURLOpen);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
