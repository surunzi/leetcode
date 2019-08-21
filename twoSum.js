module.exports = function (nums, target) {
  const map = new Map()

  for (let i = 0, len = nums.length; i < len; i++) {
    const num = nums[i]
    const rest = map.get(target - num);
    if (typeof rest === 'number' && rest !== i) {
      return [rest, i]
    }
    map.set(num, i)
  }

  return [];  
}