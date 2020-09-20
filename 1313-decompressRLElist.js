module.exports = function(nums) {
  const decompressed = []

  for (let i = 0, len = nums.length; i < len; i += 2) {
    const freq = nums[i]
    const val = nums[i + 1]
    for (let i = 0; i < freq; i++) {
      decompressed.push(val)
    }
  }

  return decompressed
}
