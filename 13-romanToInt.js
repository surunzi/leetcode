module.exports = function(s) {
  let num = 0
  let lastC = ''

  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i]

    num += numMap[c]
    switch (c) {
      case 'V':
      case 'X':
        if (lastC === 'I') {
          num -= 2
        }
        break
      case 'L':
      case 'C':
        if (lastC === 'X') {
          num -= 20
        }
        break
      case 'D':
      case 'M':
        if (lastC === 'C') {
          num -= 200
        }
        break
    }

    lastC = c
  }

  return num
}

const numMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
