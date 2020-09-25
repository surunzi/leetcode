const { expect } = require('chai')

exports = function(name, tests) {
  const fn = require('./' + name)
  const names = name.split('-')

  describe(names[0], function() {
    it(names[1], function() {
      tests.forEach(test => {
        const result = test.pop()
        expect(fn.apply(null, test)).to.eql(result)
      })
    })
  })
}

exports.toSinglyLinkedList = function(arr) {
  const len = arr.length
  if (len === 0) {
    return null
  }

  let head = {
    val: arr[0],
    next: null
  }
  let cur = head

  for (let i = 1; i < len; i++) {
    cur.next = {
      val: arr[i],
      next: null
    }
    cur = cur.next
  }

  return head
}

module.exports = exports
