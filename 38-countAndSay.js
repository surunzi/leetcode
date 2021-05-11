module.exports = function countAndSay(n) {
  if (map[n]) {
    return map[n]
  }

  const num = countAndSay(n - 1)
  let count = 1
  let curDigit = num[0]
  const result = []
  for (let i = 1, len = num.length; i < len; i++) {
    const digit = num[i]
    if (curDigit !== digit) {
      result.push(count, curDigit)
      curDigit = digit
      count = 0
    }
    count++
  }
  result.push(count, curDigit)

  return result.join('')
}

const map = {
  1: '1'
}
