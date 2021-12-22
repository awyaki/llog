import { Tag, Block } from '@prisma/client';

export const createTag = async (name: string) => {
  return await window.electronAPI.createTag(name);
};

export const getAllTag = async () => {
  return await window.electronAPI.getAllTag();
};

export const getContent = async (id: number) => {
  return await window.electronAPI.getContent(id);
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

export const markdownToHTML = async (markdown: string) => {
  return await window.electronAPI.markdownToHTML(markdown);
};
