/********************************************************************************
*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Input: s = "3[a2[c]]"
Output: "accaccacc"
*
*********************************************************************************/

function main (str) {
  let times = 0
  let outPutString = ''

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (Number.isSafeInteger(Number(char))) {
      times = 10 * times + Number(char)
    } else if (char === '[') {
      let leftPointer = i
      let rightPointer = findRightPointer(str, leftPointer)
      let insideString = str.slice(leftPointer + 1, rightPointer)
      if (insideString.includes('[')) {
        insideString = main(insideString)
      }
      let productionResult = stringProduction(insideString, times)
      times = 0
      outPutString += productionResult
      i = rightPointer
    } else if (char === ']') {
    } else {
      outPutString += char
    }
  }
  return outPutString
}

function findRightPointer (str, leftPointer) {
  let rightPointer
  let counter = 0
  for (let index = leftPointer; index < str.length; index++) {
    if (str[index] === '[') counter++
    if (str[index] === ']') {
      counter--
      if (counter === 0) {
        rightPointer = index
        break
      }
    }
  }
  return rightPointer
}

function stringProduction (str, num) {
  let result = ''
  for (var i = 0; i < num; i++) {
    result += str
  }
  return result
}

console.log('3[a]2[bc] : ', main('3[a]2[bc]'))
console.log('3[a2[c]] : ', main('3[a2[c]]'))
console.log('zxcv | (3)[a2[c2[x]]] | opi : ', main('zxcv|3[a2[c2[x]]]|opi'))
