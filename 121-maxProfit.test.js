const expect = require('chai').expect
const maxProfit = require('./121-maxProfit')

describe('max profit', function() {
  it('find the maximum profit', function() {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).to.equal(5)
    expect(maxProfit([7, 6, 4, 3, 1])).to.equal(0)
  })
})
