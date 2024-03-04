/*
 * @param {number} iteration - iteration of a block
 * @param {number} commitedAt - commitedAt of a block
 * @return {number} next level of a block
 *
 * Calculate level depends on current time, commitment time, iteration.
 *
 **/

export const testCalculateLevel = (
  iteration: number,
  committedAt: Date,
): number => {
  type Iteration = number;
  type Minutes = number;

  console.log("testCalculateLevel iteration", iteration);

  if (iteration === 0) return 0;
  if (iteration >= 8) return 5;

  // ex. if value of iteration is 2, the level changes 5 to 1 while 3 days pass.
  //     if value of iteration is 5, the level changes 5 to 1 while 30 days pass.
  const spanMap = new Map<Iteration, Minutes>([
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
  ]);

  const MinutesToms = (mins: Minutes): number => {
    return mins * 60 * 1000;
  };

  const now = new Date();
  const timePassed = now.getTime() - committedAt.getTime();

  const interval = MinutesToms(spanMap.get(iteration) ?? 0) / 5;
  if (0 <= timePassed && timePassed < interval) {
    console.log("1");
    return 5;
  }
  if (interval <= timePassed && timePassed < 2 * interval) {
    console.log("2");
    return 4;
  }
  if (2 * interval <= timePassed && timePassed < 3 * interval) {
    console.log("3");
    return 3;
  }
  if (3 * interval <= timePassed && timePassed < 4 * interval) {
    console.log("4");
    return 2;
  }
  if (4 * interval <= timePassed && timePassed < 5 * interval) {
    console.log("5");
    return 1;
  }

  console.log("6");
  return 1;
};
