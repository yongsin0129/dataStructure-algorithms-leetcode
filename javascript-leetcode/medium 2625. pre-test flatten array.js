var flat = function (arr) {
  let answer = []

  for (let i = 0; i < arr.length; i++) {
    const isArray = Array.isArray(arr[i])

    if (!isArray) answer.push(arr[i])
    else answer = answer.concat(flat(arr[i]))
  }

  return answer
}

const arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flat(arr1))
