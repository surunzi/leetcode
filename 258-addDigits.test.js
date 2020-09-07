const expect = require('chai').expect
const addDigits = require('./258-addDigits')

describe('add digits', function() {
  it('add digits', function() {
    ;[
      [38, 2],
      [0, 0],
      [154, 1],
      [5432, 5]
    ].forEach(function(val) {
      expect(addDigits(val[0])).to.equal(val[1])
    })
  })
})
