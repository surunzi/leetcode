module.exports = function(strs) {
  let prefix = ''
  if (strs.length === 0) {
    return prefix
  }

  const str = strs[0]

  for (let i = 0, len = str.length; i < len; i++) {
    const c = str[i]
    for (let j = 1, len = strs.length; j < len; j++) {
      if (strs[j][i] !== c) {
        return prefix
      }
    }
    prefix += c
  }

  return prefix
}
