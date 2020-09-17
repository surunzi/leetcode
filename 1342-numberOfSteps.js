const cache = {}

function numberOfSteps(num) {
  if (cache[num]) {
    return cache[num]
  }

  let stepNum = 0
  if (num === 0) {
    stepNum = 0
  } else if (num === 1) {
    stepNum = 1
  } else if (num % 2 === 0) {
    stepNum = numberOfSteps(num / 2) + 1
  } else {
    stepNum = numberOfSteps(num - 1) + 1
  }

  cache[num] = stepNum

  return stepNum
}

module.exports = numberOfSteps
