const expect = require('chai').expect
const reverse = require('./7-reverse')

describe('reverse', function() {
  it('reverse digits of an integer', function() {
    expect(reverse(123)).to.equal(321)
    expect(reverse(-123)).to.equal(-321)
    expect(reverse(120)).to.equal(21)
    expect(reverse(1534236469)).to.equal(0)
  })
})
