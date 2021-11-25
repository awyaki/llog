export const createTag = async (name: string) => {
  return await window.electronAPI.createTag(name);
};
