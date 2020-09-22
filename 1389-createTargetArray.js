module.exports = function(nums, index) {
  const target = []

  for (let i = 0, len = nums.length; i < len; i++) {
    target.splice(index[i], 0, nums[i])
  }

  return target
}
