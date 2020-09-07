const expect = require('chai').expect
const threeSum = require('./15-threeSum')

describe('three sum', function() {
  it('find all unique triplets in the array which gives the sum of zero', function() {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).to.eql([
      [-1, -1, 2],
      [-1, 0, 1]
    ])
    expect(threeSum([3, 0, -2, -1, 1, 2])).to.eql([
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, 0, 1]
    ])
    expect(threeSum([0, 0, 0, 0])).to.eql([[0, 0, 0]])
  })
})
