module.exports = function(nums, val) {
  let newLen = 0

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (num === val) {
      continue
    }
    nums[newLen++] = num
  }

  nums.length = newLen
  return newLen
}
