import { ipcMain } from 'electron';

import { create as createTag } from './api/tag/create';
import { getAll as getAllTag } from './api/tag/getAll';

export const useDBQueryOnClient = () => {
  ipcMain.handle('createTag', async (_, name: string) => {
    const result = await createTag(name);
    return result;
  });

  ipcMain.handle('getAllTag', async () => {
    const result = await getAllTag();
    return result;
  });
};


