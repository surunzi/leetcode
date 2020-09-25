module.exports = function(s) {
  let LNum = 0
  let RNum = 0
  let amount = 0

  for (let i = 0, len = s.length; i < len; i++) {
    const c = s[i]
    if (c === 'L') {
      LNum++
    } else {
      RNum++
    }

    if (LNum === RNum) {
      amount++
      LNum = 0
      RNum = 0
    }
  }

  return amount
}
