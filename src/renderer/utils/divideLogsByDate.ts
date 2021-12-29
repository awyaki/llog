import { Log } from '@prisma/client';
import { makeFormalDateString } from './makeFormalDateString';


export const divideLogsByDate = (logs: Log[]): Map<string, Log> => {
  const m = new Map<string, Log>();
  for (const log of logs) {
    const dateString = makeFormalDateString(log.createdAt);
    m.set(dateString, { ...log });
  };

  return m;
};
