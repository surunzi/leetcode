module.exports = function(nums) {
  let newLen = 0
  let lastNum

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (num === lastNum) {
      continue
    }

    nums[newLen] = num
    newLen++
    lastNum = num
  }

  nums.length = newLen
  return newLen
}
