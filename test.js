const { expect } = require('chai')

module.exports = function(name, tests) {
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
