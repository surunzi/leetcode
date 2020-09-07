const expect = require('chai').expect
const longestCommonPrefix = require('./14-longestCommonPrefix')

describe('longest common prefix', function() {
  it('find the longest common prefix string amongst an array of strings', function() {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).to.equal('fl')
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).to.equal('')
  })
})
