module.exports = function(s) {
  s = s.toLowerCase()
  const newS = []
  for (let i = 0, len = s.length; i < len; i++) {
    const code = s.charCodeAt(i)
    if ((code > 96 && code < 123) || (code > 47 && code < 58)) {
      newS.push(s[i])
    }
  }
  for (let i = 0, len = newS.length; i < len / 2; i++) {
    if (newS[i] !== newS[len - i - 1]) {
      return false
    }
  }
  return true
}
