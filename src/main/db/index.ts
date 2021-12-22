import { ipcMain } from 'electron';

import { Tag, Block } from '@prisma/client';

import { 
  createContent, 
  getContent, 
  getAllContent, 
  createTag, 
  getAllTag, 
  getNote, 
  createNote,
  updateNote
} from './api';


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


