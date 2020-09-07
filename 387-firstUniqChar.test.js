const expect = require('chai').expect
const firstUniqChar = require('./387-firstUniqChar')

describe('first unique char', function() {
  it('return first unique char position', function() {
    expect(firstUniqChar('leetcode')).to.equal(0)
    expect(firstUniqChar('loveleetcode')).to.equal(2)
    expect(firstUniqChar('aa')).to.equal(-1)
    expect(firstUniqChar('tdddytyyyac')).to.equal(9)
  })
})
