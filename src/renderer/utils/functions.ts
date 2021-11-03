const head = <T extends any>(a: T[]): T => a[0];
const tail = <T extends any>(a: T[]): T[] => a.slice(1);

// [n, m]の整数をランダムに返却する
const random = (n: number, m: number) => Math.floor(Math.random() * (m - n) + n);



function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

export { head, tail, random, makeTimeString, range };
