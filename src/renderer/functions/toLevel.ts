
/*
 * return level Of block baseed on iteration and commitedAt.
 * iteration 
 * 0 : no level change at level 0.
 * 1 : 1 day (for channing level 5 to 1)
 * 2 : 3 day
 * 3 : 7 day
 * 4 : 14 day
 * 5 : 30 day
 * 6 : 60 day
 * 7 : 90 day
 * 8 : 120 day
 * 9 : 150 day
 * 10 : no change at level 5.
 *
 *
 **/

type Level = 0 | 1 | 2 | 3 | 4 | 5;

// array for duration of changing level 5 to 1, depending on iteration. (days -> milliseconds)

const toMilliseconds = (day: number) => day * 24 * 60 * 60 * 1000;
const days = [1, 3, 7, 14, 30, 60, 90, 120, 150]
                .map((day) => toMilliseconds(day));

const toLevel = (iteration: number, commitedAt: Date): Level => {
  if (iteration === 0) return 0;
  if (iteration === 10) return 5;

  const nowTime = Date.now();
  const commitedTime = commitedAt.getTime();
  
  const passed = nowTime - commitedTime;
  const duration = days[iteration]
  const breakTimes = [...range(0, 5)].map((i) => Math.floor(duration / 5) * i);

  const isInnerRange = (s: number, n: number, e: number) => s <= n && n < e;

  if (isInnerRange(breakTimes[0], passed, breakTimes[1])) return 5;
  if (isInnerRange(breakTimes[1], passed, breakTimes[2])) return 4;
  if (isInnerRange(breakTimes[2], passed, breakTimes[3])) return 3;
  if (isInnerRange(breakTimes[3], passed, breakTimes[4])) return 2;
  return 1;
};




function* range(s: number, e: number) {
  for (let i = s; i < e; i++) {
    yield i;
  }
}
export { toLevel };
