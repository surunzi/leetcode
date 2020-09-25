module.exports = function(head) {
  const values = []

  do {
    values.unshift(head.val)
    head = head.next
  } while (head)

  let exp = 0
  let result = 0

  for (let i = 0, len = values.length; i < len; i++) {
    if (values[i] === 1) {
      result += Math.pow(2, exp)
    }
    exp++
  }

  return result
}
