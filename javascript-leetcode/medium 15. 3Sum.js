/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 */
var threeSum = function (nums) {
  const targetNumber = 0
  let answer = []
  nums = nums.sort((a, b) => a - b)

  // nums loop + contracting window
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue

    let leftPointer = i + 1
    let rightPointer = nums.length - 1

    while (leftPointer < rightPointer) {

      let threeSum = nums[i] + nums[leftPointer] + nums[rightPointer]

      if (threeSum === targetNumber) {
        answer.push([nums[i], nums[leftPointer], nums[rightPointer]])
        rightPointer--
        leftPointer++

        // 加入 while 防止 [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] 會加到相同的組合
        while (nums[leftPointer] === nums[leftPointer - 1]) { leftPointer++ }

      } else if (threeSum > targetNumber) {
        rightPointer--
      } else if (threeSum < targetNumber) {
        leftPointer++
      }
    }
  }

  return answer
}
/********************************************************************************
*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
*
*********************************************************************************/
const nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum(nums))

const nums1 = [0, 0, 0, 0]
console.log(threeSum(nums1))

const nums2 = [-2, 0, 0, 2, 2]
console.log(threeSum(nums2))