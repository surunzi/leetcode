module.exports = function(num) {
  num = '' + num
  let sortNum = num
  num = num.split('')
  sortNum = sortNum.split('')

  sortNum.sort(cmp)
  let srcIdx = -1
  let targetC
  for (let i = 0, len = num.length; i < len; i++) {
    const c = num[i]
    const sortC = sortNum[i]
    if (c < sortC) {
      srcIdx = i
      targetC = sortC
      break
    }
  }

  if (srcIdx > -1) {
    for (let i = num.length - 1; i >= 0; i--) {
      if (num[i] === targetC) {
        let temp = num[i]
        num[i] = num[srcIdx]
        num[srcIdx] = temp
        break
      }
    }
  }

  return +num.join('')
}

const cmp = (a, b) => b - a
