const expect = require('chai').expect
const increasingTriplet = require('./increasingTriplet')

describe('increasing triplet subsequence', function() {
  it('return whether an increasing subsequence of length 3 exists or not in the array', function() {
    expect(increasingTriplet([1, 2, 3, 4, 5])).to.be.true
    expect(increasingTriplet([5, 4, 3, 2, 1])).to.be.false
    expect(increasingTriplet([2, 4, -2, -3])).to.be.false
    expect(increasingTriplet([2, 5, 3, 4, 5])).to.be.true
  })
})
