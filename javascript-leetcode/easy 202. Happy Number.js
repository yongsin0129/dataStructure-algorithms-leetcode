/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy1 = function (n) {

  let sum = n
  let seen = new Set()

  // while (true) , until sum === 1 || seen.has(sum) then break
  while (true) {
    const numberArray = sum.toString().split('')

    sum = 0
    for (let i = 0; i < numberArray.length; i++) {
      sum += Math.pow(numberArray[i], 2)
    }

    if (sum === 1 || seen.has(sum)) break
    else seen.add(sum)

  }

  return sum === 1
}

/********************************************************************************
*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1
*
*********************************************************************************/
const n = 19
console.log(isHappy1(n))

// 網友解法
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy2 = function (n) {
  const seen = new Set()
  while (n !== 1 && !seen.has(n)) {
    seen.add(n)
    let sum = 0
    while (n !== 0) {
      const digit = n % 10
      sum += digit ** 2
      n = Math.floor(n / 10)
    }
    n = sum
  }
  return n === 1
}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy3 = function (n) {
  let history = []
  while (true) {
    if (history.includes(n)) {
      return false
    }
    history.push(n)
    if (history.includes(1)) {
      return true
    }
    n = n.toString().split("")
    let temp = 0
    n.forEach(item => temp += item ** 2)
    n = temp
  }
}

