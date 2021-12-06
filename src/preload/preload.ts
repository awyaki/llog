import { ipcRenderer, contextBridge } from 'electron';

import { Tag } from '@prisma/client';

contextBridge.exposeInMainWorld('electronAPI', {
  createTag: (name: string) => ipcRenderer.invoke('createTag', name),
  getAllTag: () => ipcRenderer.invoke('getAllTag'),
  createContent: (name: string, tags: Tag[], blocksNumber: number) => ipcRenderer.invoke('createContent', name, tags, blocksNumber),
  getAllContent: () => ipcRenderer.invoke('getAllContent'),
});

