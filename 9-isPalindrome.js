module.exports = function(x) {
  if (x === 0) {
    return true
  } else if (x < 0 || x % 10 === 0) {
    return false
  }

  let palindrome = 0
  let num = x

  while (num > 0) {
    const remainder = num % 10
    palindrome *= 10
    palindrome += remainder
    num = (num - remainder) / 10
  }

  return palindrome === x
}
