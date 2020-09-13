module.exports = function(nums) {
  let pairsNum = 0

  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j]) {
        pairsNum++
      }
    }
  }

  return pairsNum
}
