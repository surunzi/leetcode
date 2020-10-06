module.exports = function(arr) {
  let max = -1

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      const tmp = max
      max = arr[i]
      arr[i] = tmp
    } else {
      arr[i] = max
    }
  }

  return arr
}
