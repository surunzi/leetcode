const expect = require('chai').expect
const getSum = require('./371-getSum')

describe('get sum', function() {
  it('get sum of two integers', function() {
    expect(getSum(1, 2)).to.equal(3)
    expect(getSum(-1, 1)).to.equal(0)
    expect(getSum(5, 112)).to.equal(117)
    expect(getSum(-15, 20)).to.equal(5)
    expect(getSum(-1, -1)).to.equal(-2)
  })
})
