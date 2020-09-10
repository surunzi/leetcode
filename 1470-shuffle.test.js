const expect = require('chai').expect
const shuffle = require('./1470-shuffle')

describe('shuffle', function() {
  it('return the array in the form [x1,y1,x2,y2,...,xn,yn]', function() {
    expect(shuffle([2, 5, 1, 3, 4, 7], 3)).to.eql([2, 3, 5, 4, 1, 7])
    expect(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)).to.eql([
      1,
      4,
      2,
      3,
      3,
      2,
      4,
      1
    ])
    expect(shuffle([1, 1, 2, 2], 2)).to.eql([1, 2, 1, 2])
  })
})
