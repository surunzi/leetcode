const expect = require('chai').expect
const maximumSwap = require('./maximumSwap')

describe('maximum swap', function() {
  it('return the maximum valued number', function() {
    expect(maximumSwap(2736)).to.equal(7236)
    expect(maximumSwap(9973)).to.equal(9973)
  })
})
