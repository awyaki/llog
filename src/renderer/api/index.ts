export const createTag = async (name: string) => {
  return await window.electronAPI.createTag(name);
};

export const getAllTag = async () => {
  return await window.electronAPI.getAllTag();
};
