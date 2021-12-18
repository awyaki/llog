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

export const markdownToHTML = async (markdown: string) => {
  return await window.electronAPI.markdownToHTML(markdown);
};
