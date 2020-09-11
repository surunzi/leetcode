module.exports = function(candies, extraCandies) {
  let max = 0
  const len = candies.length

  for (let i = 0; i < len; i++) {
    if (candies[i] > max) {
      max = candies[i]
    }
  }

  for (let i = 0; i < len; i++) {
    candies[i] = max - candies[i] <= extraCandies
  }

  return candies
}
