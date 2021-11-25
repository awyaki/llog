import { ipcMain } from 'electron';
import { create as createTag } from './api/tag/create';

export const useDBQueryOnClient = () => {
  ipcMain.handle('createTag', async (_, name: string) => {
    const result = await createTag(name);
    return result;
  });
};

