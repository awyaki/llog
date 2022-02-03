export const once = (fn: () => unknown) => {
  let isDone = false;
  let result;
  if (!isDone) {
    isDone = true;
    result = fn();
    return result;
  }
  
  return result;
};
