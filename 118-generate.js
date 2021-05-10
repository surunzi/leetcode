module.exports = function(numRows) {
  const rows = [[1]]
  for (let i = 1; i < numRows; i++) {
    const row = [1]
    row[i] = 1
    const lastRow = rows[i - 1]
    for (let j = 1; j < i; j++) {
      row[j] = lastRow[j - 1] + lastRow[j]
    }
    rows[i] = row
  }
  return rows
}
