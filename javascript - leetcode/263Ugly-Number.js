/**
 * @param {number} n
 * @return {boolean}
 */
const isUgly = function (n) {
  if (n <= 0) {
    return false
  }
  if (n <= 6) return true

  while (n > 2) {
    if (n % 2 !== 0) {
      break
    }
    n = parseInt(n / 2)
  }

  while (n > 3) {
    if (n % 3 !== 0) {
      break
    }
    n = parseInt(n / 3)
  }

  while (n > 5) {
    if (n % 5 !== 0) {
      break
    }
    n = parseInt(n / 5)
  }
  return n % 2 === 0 || n % 3 === 0 || n % 5 === 0
}

console.log('isUgly ~ isUgly 6', isUgly(6))
console.log('isUgly ~ isUgly 1', isUgly(1))
console.log('isUgly ~ isUgly 14', isUgly(14))
console.log('isUgly ~ isUgly 256', isUgly(256))
