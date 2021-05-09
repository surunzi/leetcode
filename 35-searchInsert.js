module.exports = function(nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const num = nums[i]
    if (num === target || num > target) {
      return i
    }
  }
  return len
}
