const head = <T extends any>(a: T[]): T => a[0];
const tail = <T extends any>(a: T[]): T[] => a.slice(1);

// [n, m]の整数をランダムに返却する
const random = (n: number, m: number) => Math.floor(Math.random() * (m - n) + n);

const makeTimeString = (d: Date): string => {
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();

    const hour = d.getHours();
    const minute = d.getMinutes().toString();
  
    return `${year}/${month+1}/${date} ${hour}:${minute.length === 1 ? '0'.concat(minute) : minute}`;
};


function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

export { head, tail, random, makeTimeString, range };
