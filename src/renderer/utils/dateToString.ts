export const dateToString = (d: Date): string => {
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();

    const hour = d.getHours();
    const minute = d.getMinutes().toString();
  
    return `${year}/${month+1}/${date} ${hour}:${minute.length === 1 ? '0'.concat(minute) : minute}`;
};
