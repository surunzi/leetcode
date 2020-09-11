const expect = require('chai').expect
const kidsWithCandies = require('./1431-kidsWithCandies')

describe('kids with candies', function() {
  it('he or she can have the greatest number of candies', function() {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).to.eql([
      true,
      true,
      true,
      false,
      true
    ])
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).to.eql([
      true,
      false,
      false,
      false,
      false
    ])
    expect(kidsWithCandies([12, 1, 12], 10)).to.eql([true, false, true])
  })
})
