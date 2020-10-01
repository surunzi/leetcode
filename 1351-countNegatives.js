module.exports = function(grid) {
  const rowCount = grid.length
  const columnCount = grid[0].length

  let negativeCount = rowCount * columnCount

  for (let i = 0; i < rowCount; i++) {
    const row = grid[i]
    for (let i = 0; i < columnCount; i++) {
      if (row[i] < 0) {
        break
      }
      negativeCount--
    }
  }

  return negativeCount
}
