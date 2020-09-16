module.exports = function(s, indices) {
  const len = indices.length
  const str = new Array(len)

  for (let i = 0; i < len; i++) {
    str[indices[i]] = s[i]
  }

  return str.join('')
}
