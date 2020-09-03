module.exports = function(prices) {
  let min = prices[0]
  let profit = 0
  for (let i = 0, len = prices.length; i < len; i++) {
    const price = prices[i]
    if (price - min > profit) {
      profit = price - min
    } else if (price < min) {
      min = price
    }
  }

  return profit
}
