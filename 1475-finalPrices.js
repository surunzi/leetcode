module.exports = function(prices) {
  const len = prices.length

  for (let i = 0; i < len; i++) {
    const price = prices[i]
    for (let j = i + 1; j < len; j++) {
      if (prices[j] <= price) {
        prices[i] = price - prices[j]
        break
      }
    }
  }

  return prices
}
