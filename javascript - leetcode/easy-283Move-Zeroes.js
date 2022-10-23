/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let nonZeroIndex = 0
  nums.forEach((v, i) => {
    if (v) {
      nums[nonZeroIndex] = v
      nonZeroIndex++
    }
  })
  for (nonZeroIndex; nonZeroIndex < nums.length; nonZeroIndex++) {
    nums[nonZeroIndex] = 0
  }
}

const nums = [0, 11, 0, 33, 12]
moveZeroes(nums)
console.log('nums', nums)

/**
 * 解題重點，宣告一個變數來裝不是 0 的數字，且裝過之後做 ++ 的動作
 * 第一階段就可以得到所有非 0 的數字
 * 第二階段根據上面的變數與 array.length 的差值，可以得知有多少個 0 ，再將 array 後面所有數字變更為 0
 */
