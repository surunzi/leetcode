const expect = require('chai').expect
const spiralOrder = require('./spiralOrder')

describe('spiral order', function() {
  it(' return all elements of the matrix in spiral order', function() {
    expect(
      spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ])
    ).to.eql([1, 2, 3, 6, 9, 8, 7, 4, 5])
    expect(
      spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12]
      ])
    ).to.eql([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7])
    expect(spiralOrder([])).to.eql([])
  })
})
