module.exports = function(digits) {
  let carry = false
  const len = digits.length
  let i = 1
  do {
    let pos = len - i
    if (pos < 0) {
      digits.unshift(0)
      pos = 0
    }
    const digit = digits[pos]
    if (digit + 1 > 9) {
      carry = true
      digits[pos] = 0
    } else {
      carry = false
      digits[pos] = digit + 1
    }
    i++
  } while (carry)

  return digits
}
