import { ipcMain } from 'electron';
import markdownToHTML from 'zenn-markdown-html';

export const useMarkdownToHTML = () => {
  ipcMain.handle('markdownToHTML', (_, markdown: string) => markdownToHTML(markdown));
};
