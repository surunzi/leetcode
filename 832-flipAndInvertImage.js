module.exports = function(A) {
  const len = A.length

  for (let i = 0; i < len; i++) {
    const row = A[i]
    row.reverse()
    for (let i = 0; i < len; i++) {
      row[i] = row[i] === 0 ? 1 : 0
    }
  }

  return A
}
