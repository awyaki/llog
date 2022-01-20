import { Tag, Block, Content } from '@prisma/client';

export const createTag = async (name: string) => {
  return await window.electronAPI.createTag(name);
};

export const getAllTag = async () => {
  return await window.electronAPI.getAllTag();
};

export const getContent = async (id: number) => {
  return await window.electronAPI.getContent(id);
};

export const getAllContent = async () => {
  return await window.electronAPI.getAllContent();
};

export const createContent = async (name: string, tags: Tag[], numberOfBlock: number) => {
  return await window.electronAPI.createContent(name, tags, numberOfBlock);
};

export const updateContentName = async ({ id, name }: Pick<Content, 'id' | 'name'>) => {
  return await window.electronAPI.updateContentName({ id, name });
};

export const getNote = async (id: number) => {
  return await window.electronAPI.getNote(id);
};

export const createNote = async (
  markdown: string,
  html: string,
  tags: Tag[],
  blocks: Block[],
  contentId: number
) => {
  return await window.electronAPI.createNote(markdown, html, tags, blocks, contentId);
};

export const updateNote = async (
  id: number,
  markdown: string,
  html: string,
  tags: Tag[],
  blocks: Block[],
  contentId: number,
  commitedAt: Date | null,
  updatedAt: Date
) => {
  return await window.electronAPI.updateNote(id, markdown, html, tags, blocks, contentId, commitedAt, updatedAt);
};

export const getNoteWithContentId = async (contentId: number) => {
  return await window.electronAPI.getNoteWithContentId(contentId);
};

export const createLog = async (
  markdown: string,
  html: string,
  blocks: Block[],
  tags: Tag[],
  contentName: string,
  noteId: number,
  contentId: number
) => {
  return await window.electronAPI.createLog(markdown, html, blocks, tags, contentName, noteId, contentId);
};

export const getLog = async (id: number) => {
  return await window.electronAPI.getLog(id);
};

export const getAllLog = async () => {
  return await window.electronAPI.getAllLog();
};

export const updateBlock = async (block: Pick<Block, 'id' | 'iteration' | 'commitedAt' | 'level'>) => {
  return await window.electronAPI.updateBlock(block);
};
export const getAllBlock = async () => {
  return await window.electronAPI.getAllBlock();
};

export const markdownToHTML = async (markdown: string) => {
  return await window.electronAPI.markdownToHTML(markdown);
};

