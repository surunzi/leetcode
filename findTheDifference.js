module.exports = function(s, t) {
  return String.fromCharCode(charSum(t) - charSum(s))
}

function charSum(str) {
  var ret = 0

  for (var i = 0, len = str.length; i < len; i++) {
    ret += str[i].charCodeAt(0)
  }

  return ret
}
