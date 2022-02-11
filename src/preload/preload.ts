import { ipcRenderer, contextBridge } from 'electron';

import { Tag, Block, Content } from '@prisma/client';

contextBridge.exposeInMainWorld('electronAPI', {
  createTag: (name: string) => ipcRenderer.invoke('createTag', name),
  getAllTag: () => ipcRenderer.invoke('getAllTag'),
  createContent: (name: string, tags: Tag[], blocksNumber: number) => ipcRenderer.invoke('createContent', name, tags, blocksNumber),
  getAllContent: () => ipcRenderer.invoke('getAllContent'),
  getAllContentName: () => ipcRenderer.invoke('getAllContentName'),
  getContent: (id: number) => ipcRenderer.invoke('getContent', id),
  updateContentName: ({ id, name }: Pick<Content, 'id' | 'name'>) => ipcRenderer.invoke('updateContentName', { id, name }),
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
  deleteNote: (id: number) => ipcRenderer.invoke('deleteNote', id),
  createLog: (
    markdown: string,
    html: string,
    blocks: Block[],
    tags: Tag[],
    title: string,
    contentName: string,
    noteId: number,
    contentId: number
  ) => ipcRenderer.invoke('createLog', markdown, html, blocks, tags, title, contentName, noteId, contentId),
  getLog: (id: number) => ipcRenderer.invoke('getLog', id),
  getAllLog: () => ipcRenderer.invoke('getAllLog'),
  updateBlock: (block: Pick<Block, 'id' | 'iteration' | 'commitedAt' | 'level'>) => ipcRenderer.invoke('updateBlock', block),
  getAllBlock: () => ipcRenderer.invoke('getAllBlock'),
  updateContentTags: (id: number, tags: Tag[]) => ipcRenderer.invoke('updateContentTags', id, tags),
  upsertContentBlocks: (id: number, blockMaxUnitNumber: number, howManyBlocks: number) => ipcRenderer.invoke('upsertContentBlocks', id, blockMaxUnitNumber, howManyBlocks),
  deleteConnectContentTags: (id: number) => ipcRenderer.invoke('deleteConnectContentTags', id),
  deleteContent: (id: number) => ipcRenderer.invoke('deleteContent', id),
  markdownToHTML: (markdown: string) => ipcRenderer.invoke('markdownToHTML', markdown),
  updateLogTitle: (id: number, title: string) => ipcRenderer.invoke('updateLogTitle', id, title),
});

