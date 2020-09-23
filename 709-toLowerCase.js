module.exports = function(str) {
  const lowerCased = []

  for (let i = 0, len = str.length; i < len; i++) {
    const code = str.charCodeAt(i)
    lowerCased[i] = String.fromCharCode(
      code >= 65 && code <= 90 ? code + 32 : code
    )
  }

  return lowerCased.join('')
}
