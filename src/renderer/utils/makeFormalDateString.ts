
/*
 * @param {Date} - Date object to transform
 * @return {String} - date string. ex. Thursday, 28th October 2021
 *
**/

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getDateString = (date: number) => {
  const str = date.toString();
  switch (str) {
    case '1':
      return '1'.concat('st');
    case '2':
      return '2'.concat('nd');
    case '3':
      return '3'.concat('rd');
    default:
      return str.concat('th');
  }
};

export const makeFormalDateString = (dateObj: Date) => {
  const day = days[dateObj.getDay()];
  const date = getDateString(dateObj.getDate());
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear().toString();
  
  return `${day}, ${date} ${month} ${year}`
};
