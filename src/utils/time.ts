export const getNumericDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return year * 365 + month * 12 + day;
};
