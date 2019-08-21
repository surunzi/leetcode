const expect = require('chai').expect
const isAnagram = require('./isAnagram')

describe('is anagram', function() {
  it('determine if t is an anagram of s', function() {
    expect(isAnagram('abc', 'cba')).to.be.true
    expect(isAnagram('', '')).to.be.true
    expect(isAnagram('cdca', 'acdc')).to.be.true
    expect(isAnagram('tdc', 'tda')).to.be.false
    expect(isAnagram('abc', 'bac')).to.be.true
  })
})
