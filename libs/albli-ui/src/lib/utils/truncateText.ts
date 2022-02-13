export const truncate = (text: string, length: number): string => text.length >= length ? [...text.split('').slice(0, length), '...'].join('') : text;
