module.exports = function(prices) {
  let profit = 0
  for (let i = 1, len = prices.length; i < len; i++) {
    const price = prices[i]
    const lastPrice = prices[i - 1]
    if (price - lastPrice > 0) {
      profit += price - lastPrice
    }
  }

  return profit
}
