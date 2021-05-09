module.exports = function(s) {
  let stack = []

  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i]
    stack.push(c)
    if (!check(c, '(', ')') || !check(c, '[', ']') || !check(c, '{', '}')) {
      return false
    }
  }

  function check(c, left, right) {
    if (c === right) {
      const leftPos = stack.lastIndexOf(left)
      if (leftPos < 0 || leftPos !== stack.length - 2) {
        return false
      }
      stack.pop()
      stack.pop()
    }
    return true
  }

  return stack.length === 0
}
