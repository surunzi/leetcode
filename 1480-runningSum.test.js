const expect = require('chai').expect
const runningSum = require('./1480-runningSum')

describe('running sum', function() {
  it('return the running sum of nums', function() {
    expect(runningSum([1, 2, 3, 4])).to.eql([1, 3, 6, 10])
    expect(runningSum([1, 1, 1, 1, 1])).to.eql([1, 2, 3, 4, 5])
    expect(runningSum([3, 1, 2, 10, 1])).to.eql([3, 4, 6, 16, 17])
  })
})
