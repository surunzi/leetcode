function sumOddLengthSubarrays(arr) {
  const len = arr.length
  if (len === 1) {
    return arr[0]
  }

  let result = arr[0]
  let sum = arr[0]
  for (i = 1; i < len - 1; i += 2) {
    sum = sum + arr[i] + arr[i + 1]
    result += sum
  }

  arr.shift()
  return result + sumOddLengthSubarrays(arr)
}

module.exports = sumOddLengthSubarrays
