module.exports = function(left, right) {
  const nums = []

  while (left <= right) {
    let isDividing = true
    const digits = (left + '').split('')

    for (let i = 0, len = digits.length; i < len; i++) {
      const digit = +digits[i]
      if (digit === 0 || left % digit !== 0) {
        isDividing = false
        break
      }
    }
    if (isDividing) {
      nums.push(left)
    }

    left++
  }

  return nums
}
