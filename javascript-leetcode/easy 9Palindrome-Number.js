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


/********************************************************************************
*
// 第三種解法

var isPalindrome = function (x) {
  var reverse = 0
  var copy = x

  //The loop break when the copy of original number becomes zero
  //Also negative number cannot be a palindrome
  while (copy > 0) {
    const digit = copy % 10
    reverse = reverse * 10 + digit
    copy = Math.floor(copy / 10)
  }

  return reverse == x
}

original number: 543
reverse number: 0

//Get the last digit of the original number
original % 10 = 543 % 10 = 3
//Put this digit as the last one in the reverse number
reverse * 10 + digit = 0 * 10 + 3 = 0 + 3 = 3
reverse: 3
//Remove this digit from the original number
original / 10 = 543 / 10 = 54.3
~~54.3 = 54
original: 54

//Repeat
original % 10 = 54 % 10 = 4
reverse * 10 + digit = 3 * 10 + 4 = 30 + 4 = 34
reverse: 34
original / 10 = 54 / 10 = 5.4
~~5.4 = 5
original: 5

//Repeat
original % 10 = 5 % 10 = 5
reverse * 10 + digit = 34 * 10 + 5 = 340 + 5 = 345
reverse: 345
original / 10 = 5 / 10 = 0.5
~~0.5 = 0
original: 0

input: 543
output: 345
So if the reverse number is equal to the original number, then it is a palindrome

345 != 543 //not palindrome
272 == 272 //is palindrome
*
*********************************************************************************/