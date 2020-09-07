module.exports = function(nums) {
  let first = Infinity
  let second = Infinity

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (num > second) {
      return true
    }
    if (num < first) {
      first = num
    } else if (num > first && num < second) {
      second = num
    }
  }

  return false
}
