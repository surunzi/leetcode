module.exports = function(nums) {
  const map = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (map[num]) {
      return true
    } else {
      map[num] = true
    }
  }
  return false
}
