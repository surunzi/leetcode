const expect = require('chai').expect
const reverseString = require('./reverseString')

describe('reverse string', function() {
  it('reverse string', function() {
    expect(reverseString('abc')).to.equal('cba')
    expect(reverseString('d')).to.equal('d')
  })
})
