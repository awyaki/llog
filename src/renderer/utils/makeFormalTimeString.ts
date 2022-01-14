
/*
 * @param {Date} - Date object to transform
 * @return {String} - date string. ex. Thursday, 28th October 2021 at 14:00
 *
**/

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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

export const makeFormalTimeString = (dateObj: Date) => {
  const day = days[dateObj.getDay()];
  const date = getDateString(dateObj.getDate());
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear().toString();
  const hour = dateObj.getHours(); 
  const preMinute = dateObj.getMinutes();
  const minute = preMinute <= 9 ? `0${preMinute}` : `${preMinute}`
  return `${day}, ${date} ${month} ${year} at ${hour}:${minute}`
};
