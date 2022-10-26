/**
 * @param {number[]} nums
 * @return {number}
 */
// const singleNumber = function (nums) {
//   const obj = {}
//   nums.forEach(v => {
//     obj[v] = obj[v] ? obj[v] + 1 : 1
//   })
//   return Object.keys(obj).find(key => obj[key] === 1)
// }

// 使用 XOR 解法，prev 裡面出現第一次的數字會用加的，第二次出現的會用減的
const singleNumber = function (nums) {
  let bool
  return nums.reduce((prev, cur) => {
    bool = prev ^ cur
    return bool
  })
}

const nums = [4, 1, 2, 1, 2, 2, 2, 4]
console.log(singleNumber(nums))
