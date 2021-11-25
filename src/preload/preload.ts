import { ipcRenderer, contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  createTag: (name: string) => ipcRenderer.invoke('createTag', name),
  getAllTag: () => ipcRenderer.invoke('getAllTag'),
});

