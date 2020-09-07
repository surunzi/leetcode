const expect = require('chai').expect
const findTheDifference = require('./389-findTheDifference')

describe('find the difference', function() {
  it('find the difference', function() {
    expect(findTheDifference('ab', 'acb')).to.equal('c')
    expect(findTheDifference('test', 'setta')).to.equal('a')
  })
})
