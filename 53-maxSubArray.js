module.exports = function(nums) {
  let sum = nums[0]
  let maxSum = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    const num = nums[i]
    if (num > 0) {
      if (sum < 0) {
        sum = num
      } else {
        sum += num
      }
    } else {
      if (sum < num) {
        sum = num
      } else {
        sum += num
      }
    }
    if (sum > maxSum) {
      maxSum = sum
    }
  }
  return maxSum
}
