export const getEntriesMap = (value) => {
  let arr = value;

  if (typeof value === 'string') {
    arr = value.split('');
  }

  const entriesMap = arr.reduce((acc, value) => {
    if (!acc[value]) {
      acc[value] = 1;
    } else {
      acc[value] += 1;
    }

    return acc;
  }, {});

  return entriesMap;
};

export const countArraySum = (arr) => arr.reduce((result, num) => result + num, 0);
