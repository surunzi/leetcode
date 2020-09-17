module.exports = function(nums) {
  const len = nums.length
  const sortNums = nums.slice(0)
  sortNums.sort(cmp)

  const map = {}
  map[sortNums[0]] = 0
  for (let i = 1; i < len; i++) {
    const num = sortNums[i]
    if (num > sortNums[i - 1]) {
      map[num] = i
    }
  }

  for (let i = 0; i < len; i++) {
    nums[i] = map[nums[i]]
  }

  return nums
}

const cmp = (a, b) => a - b
