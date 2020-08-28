module.exports = function(nums1, nums2) {
  const nums = nums1.concat(nums2)
  nums.sort(cmp)

  const len = nums.length
  if (len % 2 === 0) {
    return (nums[len / 2] + nums[len / 2 - 1]) / 2
  }

  return nums[Math.floor(nums.length / 2)]
}

const cmp = (a, b) => a - b
