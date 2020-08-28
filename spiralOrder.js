module.exports = function(matrix) {
  const order = []

  let m = matrix.length
  if (!matrix[0]) {
    return order
  }
  let n = matrix[0].length

  let startRow = 0
  let endRow = m - 1
  let startColumn = 0
  let endColumn = n - 1
  while (startRow <= endRow && startColumn <= endColumn) {
    for (let i = startColumn; i <= endColumn; i++) {
      order.push(matrix[startRow][i])
    }
    for (let i = startRow + 1; i <= endRow; i++) {
      order.push(matrix[i][endColumn])
    }
    if (endRow !== startRow) {
      for (let i = endColumn - 1; i >= startColumn; i--) {
        order.push(matrix[endRow][i])
      }
    }
    if (startColumn !== endColumn) {
      for (let i = endRow - 1; i > startRow; i--) {
        order.push(matrix[i][startColumn])
      }
    }
    startRow++
    endRow--
    startColumn++
    endColumn--
  }

  return order
}
