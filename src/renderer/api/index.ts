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

export const markdownToHTML = async (markdown: string) => {
  return await window.electronAPI.markdownToHTML(markdown);
};
