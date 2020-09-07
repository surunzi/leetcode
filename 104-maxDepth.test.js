const expect = require('chai').expect
const maxDepth = require('./104-maxDepth')

describe('max depth', function() {
  it('find maximum depth of a binary tree', function() {
    expect(
      maxDepth({
        left: {},
        right: {
          left: {},
          right: {
            right: {}
          }
        }
      })
    ).to.equal(4)

    expect(
      maxDepth({
        left: {},
        right: {}
      })
    ).to.equal(2)
  })
})
