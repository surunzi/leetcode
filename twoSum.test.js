const expect = require('chai').expect
const twoSum = require('./twoSum')

describe('two sum', () => {
  it('return indices of the two numbers such that they add up to a specific target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).to.eql([0, 1])
    expect(twoSum([3, 2, 4], 6)).to.eql([1, 2])
    expect(twoSum([3, 3], 6)).to.eql([0, 1])
  })
})
