import { ipcRenderer, contextBridge } from 'electron';

import { Tag, Block } from '@prisma/client';

contextBridge.exposeInMainWorld('electronAPI', {
  createTag: (name: string) => ipcRenderer.invoke('createTag', name),
  getAllTag: () => ipcRenderer.invoke('getAllTag'),
  createContnet: (name: string, tags: Tag[], blocks: Block[]) => ipcRenderer.invoke('createContent', name, tags, blocks),
  getAllContent: () => ipcRenderer.invoke('getAllContent'),
});

