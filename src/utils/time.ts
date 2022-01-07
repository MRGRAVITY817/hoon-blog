export const getNumericDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return year * 365 + month * 12 + day;
};

export const getPrettyFullDate = (date: Date) => {
  return `${getPrettyMonth(date.getMonth())} ${getPrettyDate(
    date.getDate()
  )}, ${date.getFullYear()}`;
};

export const getPrettyMonth = (month: number) => {
  const monthArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  return monthArray[month];
};

export const getPrettyDate = (date: number) => {
  const st = [1, 21, 31];
  const nd = [2, 22];
  const rd = [3, 22];
  if (st.includes(date)) {
    return `${date}st`;
  } else if (nd.includes(date)) {
    return `${date}nd`;
  } else if (rd.includes(date)) {
    return `${date}rd`;
  } else {
    return `${date}th`;
  }
};
