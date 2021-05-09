module.exports = function(haystack, needle) {
  if (!needle) {
    return 0
  }

  const needleLen = needle.length
  for (let i = 0, len = haystack.length; i < len; i++) {
    for (let j = 0; j < needleLen; j++) {
      if (haystack[i + j] !== needle[j]) {
        break
      }
      if (j === needleLen - 1) {
        return i
      }
    }
  }

  return -1
}
