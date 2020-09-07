module.exports = function(x) {
  const sign = x < 0 ? -1 : 1
  x = Math.abs(x)
  let reverse = 0
  const digits = []
  while (x > 0) {
    digits.push(x % 10)
    x = Math.floor(x / 10)
  }

  for (let i = 0, len = digits.length; i < len; i++) {
    reverse += digits[i] * Math.pow(10, len - i - 1)
  }

  reverse = sign * reverse

  const limit = Math.pow(2, 31)
  if (reverse < -limit || reverse > limit - 1) {
    return 0
  }

  return reverse
}
