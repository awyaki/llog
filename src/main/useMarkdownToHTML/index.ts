import { ipcMain } from "electron";
import markdownToHTML from "zenn-markdown-html";

export const useMarkdownToHTML = () => {
  ipcMain.handle(
    "markdownToHTML",
    async (_, markdown: string) => await markdownToHTML(markdown),
  );
};
