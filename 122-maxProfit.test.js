const expect = require('chai').expect
const maxProfit = require('./122-maxProfit')

describe('max profit', function() {
  it('find the maximum profit', function() {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).to.equal(7)
    expect(maxProfit([1, 2, 3, 4, 5])).to.equal(4)
  })
})
