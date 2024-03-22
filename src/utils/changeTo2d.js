export const convertToMultiArray = (data, rowCount) => {
  if (data.length <= rowCount) {
    return [data];
  }

  const multiArray = [];
  const remainder = data.length % rowCount;
  const fullRowsCount = Math.floor(data.length / rowCount);

  for (let i = 0; i < fullRowsCount; i++) {
    multiArray.push(data.slice(i * rowCount, (i + 1) * rowCount));
  }

  if (remainder > 1) {
    multiArray.push(data.slice(fullRowsCount * rowCount));
  } else {
    multiArray[fullRowsCount - 1] = multiArray[fullRowsCount - 1].concat(
      data[data?.length - 1],
    );
  }

  return multiArray;
};
