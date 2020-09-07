const expect = require('chai').expect
const findMedianSortedArrays = require('./4-findMedianSortedArrays')

describe('find median sorted arrays', function() {
  it('return the median of the two sorted arrays', function() {
    expect(findMedianSortedArrays([1, 3], [2])).to.equal(2)
    expect(findMedianSortedArrays([1, 2], [3, 4])).to.equal(2.5)
    expect(findMedianSortedArrays([0, 0], [0, 0])).to.equal(0)
    expect(findMedianSortedArrays([], [1])).to.equal(1)
    expect(findMedianSortedArrays([2], [])).to.equal(2)
    expect(findMedianSortedArrays([3], [-2, -1])).to.equal(-1)
  })
})
