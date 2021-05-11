module.exports = function(a, b) {
  if (a.length < b.length) {
    const tmp = a
    a = b
    b = tmp
  }
  const len = b.length
  const sum = a.split('')
  let carry = 0
  for (let i = 0; i < len || carry > 0; i++) {
    let addDigit = carry
    if (i < len) {
      addDigit += +b[len - i - 1]
    }
    let sumPos = sum.length - i - 1
    if (sumPos < 0) {
      sum.unshift(0)
      sumPos = 0
    }
    const digit = +sum[sumPos]
    if (digit + addDigit > 1) {
      carry = 1
      sum[sumPos] = digit + addDigit - 2
    } else {
      sum[sumPos] = digit + addDigit
      carry = 0
    }
  }
  return sum.join('')
}
