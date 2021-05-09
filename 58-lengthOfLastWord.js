module.exports = function(s) {
  let lastLen = 0
  let lastC = ''
  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i]
    if (c !== ' ') {
      if (lastC === ' ') {
        lastLen = 0
      }
      lastLen++
    }
    lastC = c
  }
  return lastLen
}
