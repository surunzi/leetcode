module.exports = function(nums) {
  let result = 0

  for (let i = 0, len = nums.length; i < len; i++) {
    if (('' + nums[i]).length % 2 === 0) {
      result++
    }
  }

  return result
}
