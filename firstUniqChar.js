module.exports = function(s) {
  var arr = new Array(26)

  for (var i = 0; i < 26; i++) arr[i] = [-1, 0]

  i = 0
  for (var len = s.length; i < len; i++) {
    var val = arr[s[i].charCodeAt(0) - 97]

    if (val[0] === -1) val[0] = i
    val[1] = val[1] + 1
  }

  var ret = -1

  for (i = 0; i < 26; i++) {
    val = arr[i]
    if (val[1] === 1) {
      if (ret === -1) {
        ret = val[0]
      } else if (val[0] < ret) {
        ret = val[0]
      }
    }
  }

  return ret
}
