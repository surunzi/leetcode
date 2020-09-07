module.exports = function(nums) {
  const triplets = []

  nums.sort(cmp)
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      break
    }
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let start = i + 1
    let end = len - 1
    const sum = 0 - nums[i]
    while (start < end) {
      if (nums[start] + nums[end] === sum) {
        triplets.push([nums[i], nums[start], nums[end]])
      }

      if (nums[start] + nums[end] < sum) {
        const num = nums[start]
        while (nums[start] === num && start < end) start++
      } else {
        const num = nums[end]
        while (nums[end] === num && start < end) end--
      }
    }
  }

  return triplets
}

const cmp = (a, b) => a - b
