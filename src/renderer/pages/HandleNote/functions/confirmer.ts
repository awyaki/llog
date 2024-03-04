export const confirmer = () => {
  const message = `Do you really want to leave the page? Every data of the note which aren't saved will be completely clear.`;
  return confirm(message);
};
