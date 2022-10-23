/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  const power = Math.log2(n)
  return Number.isInteger(power)
}

console.log('isPowerOfTwo() : ', isPowerOfTwo(3))
