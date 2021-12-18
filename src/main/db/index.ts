import { ipcMain } from 'electron';

import { Tag, Block } from '@prisma/client';

import { create as createTag } from './api/tag/create';
import { getAll as getAllTag } from './api/tag/getAll';

import { create as createContent } from './api/content/create';
import { getAll as getAllContent } from './api/content/getAll';
import { get as getContent } from './api/content/get';

import { create as createNote } from './api/note/create';
import { get as getNote } from './api/note';

export const useDBQueryOnClient = () => {
  ipcMain.handle('createTag', async (_, name: string) => {
    const result = await createTag(name);
    return result;
  });

  ipcMain.handle('getAllTag', async () => {
    const result = await getAllTag();
    return result;
  });

  ipcMain.handle('createContent', async (_, name: string, tags: Tag[], blocksNumber: number) => {
    const result = await createContent(name, tags, blocksNumber);
    return result;
  });

  ipcMain.handle('getAllContent', async () => {
    const result = await getAllContent();
    return result;
  });

  ipcMain.handle('getContent', async (_, id: number) => {
    const result = await getContent(id);
    return result;
  });

  ipcMain.handle('createNote', async (
    _, 
    mkd: string,
    transformed: string,
    tags: Tag[],
    blocks: Block[],
    contentId: number
    ) => {
    const result = await createNote(mkd, transformed, tags, blocks, contentId);
    return result;
  });

  ipcMain.handle('getNote', async (_, id: number) => {
    const result = await getNote(id);
    return result;
  });
};


