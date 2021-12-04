import { ipcMain } from 'electron';

import { Tag, Block } from '@prisma/client';

import { create as createTag } from './api/tag/create';
import { getAll as getAllTag } from './api/tag/getAll';

import { create as createContent } from './api/content/create';
import { getAll as getAllContent } from './api/content/getAll';

export const useDBQueryOnClient = () => {
  ipcMain.handle('createTag', async (_, name: string) => {
    const result = await createTag(name);
    return result;
  });

  ipcMain.handle('getAllTag', async () => {
    const result = await getAllTag();
    return result;
  });

  ipcMain.handle('createContent', async (_, name: string, tags: Tag[], blocks: Block[]) => {
    const result = await createContent(name, tags, blocks);
    return result;
  });

  ipcMain.handle('getAllContent', async () => {
    const result = await getAllContent();
    return result;
  });
};


