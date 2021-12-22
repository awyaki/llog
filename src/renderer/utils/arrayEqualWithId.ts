import { zip } from './zip';

/*
 * @param array1 - An Array that have object with id field, and is compered with array2.
 * @param array2 - An Array that have object with id field, and is compered with array1.
 **/

type ArrayWithId = {
  id: number;
}[];

export const ArrayeEqualWithId = (array1: ArrayWithId, array2: ArrayWithId) => {

  const len1 = array1.length;
  const len2 = array2.length;

  if (len1 !== len2) {
    return false;
  }

  // ASSERTION: len1 === len2
  
  const _array1 = [...array1].sort((a, b) => a.id - b.id);
  const _array2 = [...array2].sort((a, b) => a.id - b.id);
  
  const isEqaul = zip(_array1, _array2).every((zipped) => zipped[0].id === zipped[1].id);
  
  return isEqaul;
};
