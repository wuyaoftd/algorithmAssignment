/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

  let length = matrix.length
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  return matrix.map(item => item.reverse())
};