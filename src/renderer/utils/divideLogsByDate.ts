import { LogWithRelation as Log } from '~/pages/type';

const isSameDate = (d1: Date, d2: Date) => {
  const isSameYear = d1.getFullYear() === d2.getFullYear();
  const isSameMonth = d1.getMonth() === d2.getMonth();
  const isSameDateNum = d1.getDate() === d2.getDate();

  return isSameYear && isSameMonth && isSameDateNum;
};

export const divideLogsByDate = (logs: Log[]): Log[][] => {
  if (logs.length === 0) return [];
  const result: Log[][] = []; 

  let nowDate: Date = logs[0].createdAt;
  let tmp: Log[] = [];

  for (let i = 0; i < logs.length; i++) {

    if (isSameDate(nowDate, logs[i].createdAt)) {
      tmp.push({ ...logs[i] });
      if (logs.length - 1 === i) result.push([...tmp]);
    } else {
      result.push([...tmp]);
      nowDate = logs[i].createdAt;
      tmp = [{ ...logs[i] }];
      if (logs.length - 1 === i) result.push([...tmp]);
    }
    
  }
  
  result.push([...tmp]);
  return result;
};
