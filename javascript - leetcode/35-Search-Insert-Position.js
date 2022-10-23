/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let index = 0
  nums.forEach(value => {
    if (target > value) return index++
  })
  return index
}

const nums = [1, 3, 5, 6]
const target = 5

console.log(searchInsert(nums, target))
