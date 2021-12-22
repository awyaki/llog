import { ipcRenderer, contextBridge } from 'electron';

import { Tag, Block } from '@prisma/client';

contextBridge.exposeInMainWorld('electronAPI', {
  createTag: (name: string) => ipcRenderer.invoke('createTag', name),
  getAllTag: () => ipcRenderer.invoke('getAllTag'),
  createContent: (name: string, tags: Tag[], blocksNumber: number) => ipcRenderer.invoke('createContent', name, tags, blocksNumber),
  getAllContent: () => ipcRenderer.invoke('getAllContent'),
  getContent: (id: number) => ipcRenderer.invoke('getContent', id),
  createNote: (
    mkd: string,
    transformed: string,
    tags: Tag[],
    blocks: Block[],
    contentId: number,
  ) => ipcRenderer.invoke('createNote', mkd, transformed, tags, blocks, contentId),
  getNote: (id: number) => ipcRenderer.invoke('getNote', id),
  updateNote: (
    id: number,
    markdown: string,
    html: string,
    tags: Tag[],
    blocks: Block[],
    contentId: number,
    commitedAt: Date | null,
    updatedAt: Date
  ) => ipcRenderer.invoke('updateNote', id, markdown, html, tags, blocks, contentId, commitedAt, updatedAt),
  getNoteWithContentId: (contentId: number) => ipcRenderer.invoke('getNoteWithContentId', contentId),
  markdownToHTML: (markdown: string) => ipcRenderer.invoke('markdownToHTML', markdown),
});

