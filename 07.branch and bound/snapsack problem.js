let finalResult = {
  weight: 0,
  optimalValue: 0,
  solution: []
}
let countNode = 0
let bounds = []

const branchAndBound = data => {
  for (let i = data.values.length - 1; i >= 0; i--) {
    bounds = [data.values[i] + (bounds[0] || 0)].concat(bounds)
  }

  dfs([], 0, data.weights, data.values, data.limitWeight)
  finalResult.countNode = countNode
  return finalResult
}

const validateBound = (tempArr, values, finalResult, bounds) => {
  //calculate sum value
  let sumValue = 0
  for (let i = 0; i < tempArr.length; i++) {
    if (tempArr[i] === 1) {
      sumValue += values[i]
    }
  }

  if (finalResult.optimalValue > sumValue + bounds[tempArr.length - 1])
    return false
  return true
}

const dfs = (tempArr, index, weights, values, limitWeight) => {
  countNode++
  //reach the end of state-space search tree
  if (index == weights.length) {
    let sumWeight = 0
    let sumValue = 0

    for (let i = 0; i < tempArr.length; i++) {
      if (tempArr[i] === 1) {
        sumWeight += weights[i]
        sumValue += values[i]
      }
    }

    //update optimal solution if found
    if (sumWeight <= limitWeight && sumValue > finalResult.optimalValue) {
      finalResult.weight = sumWeight
      finalResult.optimalValue = sumValue
      finalResult.solution = tempArr
    }

    return
  }

  if (!validateBound(tempArr, values, finalResult, bounds)) {
    return
  }

  dfs(tempArr.concat(0), index + 1, weights, values, limitWeight)
  dfs(tempArr.concat(1), index + 1, weights, values, limitWeight)
}

// module.exports = branchAndBound

/********************************************************************************
*
          main
*
*********************************************************************************/
const data = {
  values: [10, 10, 12, 15],
  weights: [4, 2, 6, 9],
  limitWeight: 15
}

const result = branchAndBound(data)
console.log('result : ', result)
