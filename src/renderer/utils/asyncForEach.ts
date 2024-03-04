export const asyncForEach = async <T>(
  array: T[],
  fn: (arg: T) => Promise<void>,
) =>
  array.reduce(
    (accPromise, cur) => accPromise.then(() => fn(cur)),
    Promise.resolve(),
  );
