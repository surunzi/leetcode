module.exports = function(num) {
  const numStr = ('' + num).split('')

  for (let i = 0, len = numStr.length; i < len; i++) {
    if (numStr[i] === '6') {
      numStr[i] = '9'
      break
    }
  }

  return +numStr.join('')
}
