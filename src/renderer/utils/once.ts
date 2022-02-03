export const once = (fn: () => void) => {
  let isDone = false;

  return () => {
    if (!isDone) {
      isDone = true;
      fn();
    }
  };
};
