module.exports = function(nums, n) {
  if (n < 2) {
    return nums
  }

  const result = []

  for (let i = 0, len = nums.length / 2; i < len; i++) {
    result.push(nums[i], nums[i + n])
  }

  return result
}
