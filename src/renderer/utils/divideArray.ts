/*
 * 配列の要素をn個ずつのまとまりとその余りの要素のまとまりに分割する。
 * まとまりを要素として持つ配列を返す。
 * divdeArray([1, 2, 3, 4, 5, 6, 7], 2) -> [[1, 2], [3, 4], [5, 6], [7]]
 *
*/

export const divideArray = <T>(a: T[], n: number): T[][] => {
  const helper = (a: T[], acc: T[][]): T[][] => {
    if (a.length === 0) return acc;
    return helper(a.slice(n), acc.concat([a.slice(0, n)]));
  };
  return helper(a, []);
};
