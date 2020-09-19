module.exports = function(n) {
  const digits = ('' + n).split('').map(digit => +digit)

  let product = digits[0]
  let sum = digits[0]

  for (let i = 1, len = digits.length; i < len; i++) {
    product *= digits[i]
    sum += digits[i]
  }

  return product - sum
}
