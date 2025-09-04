module.exports = function towelSort(matrix) {
  const newArray = [];
  if (!matrix || matrix.length === 0) {
    return [];
  }
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 === 0) {
      newArray.push(...matrix[i]);
    } else if (i % 2 === 1) {
      newArray.push(...matrix[i].reverse());
    }
  }
  return newArray;
};
