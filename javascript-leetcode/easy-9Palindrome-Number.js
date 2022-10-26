/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const xStr = x.toString()
  let forwardWord = ''
  for (let index = 1; index <= xStr.length; index++) {
    forwardWord += xStr.charAt(index - 1)
  }
  let backwardWord = ''
  for (let index = xStr.length; index > 0; index--) {
    backwardWord += xStr.charAt(index - 1)
  }
  return forwardWord === backwardWord
}

// 第二種解法
// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// const isPalindrome = function (x) {
//   const strX = [...x.toString()]
//   const strXreverse = [...x.toString()].reverse()
//   return strX.toString() === strXreverse.toString()
// }

isPalindrome(121)
