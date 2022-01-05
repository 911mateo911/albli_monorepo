export const padNumber = (num: number): string => num.toString().replace(/\d(?=(?:\d{3})+$)/g, '$&.');
