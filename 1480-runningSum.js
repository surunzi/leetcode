module.exports = function(nums) {
  if (nums.length === 0) {
    return []
  }

  const sums = [nums[0]]

  for (let i = 1, len = nums.length; i < len; i++) {
    sums[i] = sums[i - 1] + nums[i]
  }

  return sums
}
