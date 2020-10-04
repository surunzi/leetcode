module.exports = function(mat) {
  const n = mat.length
  let sum = 0

  for (let i = 0; i < n; i++) {
    const row = mat[i]
    sum += row[i]
    if (i !== n - 1 - i) {
      sum += row[n - 1 - i]
    }
  }

  return sum
}
