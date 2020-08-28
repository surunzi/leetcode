module.exports = function(nums) {
  let min = nums[0]
  let cur = null
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]

    if (num === min) {
      continue
    }

    if (num < min) {
      min = num
      continue
    }

    if (cur === null) {
      cur = num
    }

    if (num < cur) {
      cur = num
      continue
    }

    return true
  }

  return false
}
