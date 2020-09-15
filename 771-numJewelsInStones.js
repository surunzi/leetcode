module.exports = function(J, S) {
  const jewelMap = {}
  let num = 0

  for (let i = 0, len = J.length; i < len; i++) {
    jewelMap[J[i]] = true
  }

  for (let i = 0, len = S.length; i < len; i++) {
    if (jewelMap[S[i]]) {
      num++
    }
  }

  return num
}
