export const zip = <T, U>(a: T[], b: U[]): [T, U][] => {
  if (a.length < b.length) {
    return a.map((na, i) => [na, b[i]]);
  }

  return b.map((nb, i) => [a[i], nb]);  
};
