module.exports = function(s) {
  var len = s.length,
    ret = []

  while (len--) ret.push(s[len])

  return ret.join('')
}
