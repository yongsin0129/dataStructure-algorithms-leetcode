/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const newMap = new Map()

  for (let i = 0; i <= nums.length; i++) {
    const complement = target - nums[i]
    
    if (newMap.has(complement)) return [newMap.get(complement), i]
    else newMap.set(nums[i], i)
  }
}

const nums = [2, 7, 11, 15]
const target = 9

const nums2 = [3, 2, 4]
const target2 = 6

const nums3 = [3, 3, 4, 6, 7, 9]
const target3 = 13

console.log(twoSum(nums, target))
console.log(twoSum(nums2, target2))
console.log(twoSum(nums3, target3))