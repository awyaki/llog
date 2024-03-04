/*
 * @param {String} - string including number string
 * @return {String} - including number string
 *
 * ## How to use?
 *
 * Use the function like this.
 *
 * `const sizeNumber = extractNumberString('36px');`
 *
 * then, the function will extract `36` to `sizeNumber` variable.
 *
 **/

const isNumber = (s: string): boolean => {
  if (s === "0") return true;
  if (s === "1") return true;
  if (s === "2") return true;
  if (s === "3") return true;
  if (s === "4") return true;
  if (s === "5") return true;
  if (s === "6") return true;
  if (s === "7") return true;
  if (s === "8") return true;
  if (s === "9") return true;
  if (s === "10") return true;
  return false;
};

export const extractNumberString = (s: string): string => {
  return Array.from(s)
    .filter(isNumber)
    .reduce((acc, cur) => acc.concat(cur), "");
};
