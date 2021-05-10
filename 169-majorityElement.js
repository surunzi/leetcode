module.exports = function(nums) {
  const map = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (!map[num]) {
      map[num] = 0
    }
    map[num]++
    if (map[num] > len / 2) {
      return num
    }
  }
}
