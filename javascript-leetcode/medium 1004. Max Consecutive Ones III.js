/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let LPointer = 0
  let answer = 0

  for (let i = 0; i < nums.length; i++) {
    // value = 1
    if (nums[i] === 1) { }

    // value = 0
    else if (nums[i] === 0) {
      // quota enough > 0
      if (k > 0) k--

      // quota <= 0 
      else {
        while (k <= 0) {
          if (nums[LPointer] === 0) k++
          LPointer++
        }
        k--
      }
    }

    // count answer
    answer = Math.max(answer, i - LPointer + 1)
  }

  return answer
}

const nums1 = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
const k1 = 2
console.log(longestOnes(nums1, k1))

const nums2 = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
const k2 = 3
console.log(longestOnes(nums2, k2))
/********************************************************************************
*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length
*
*********************************************************************************/

//網友解答
var longestOnes = function (nums, k) {
  let left = 0
  let current = 0
  let answer = 0

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      current++
    }

    while (current > k) {
      if (nums[left] === 0) {
        current--
      }
      left++
    }
    answer = Math.max(answer, right - left + 1)
  }
  return answer
}