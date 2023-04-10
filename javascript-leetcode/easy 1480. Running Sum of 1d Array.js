/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {

  // answer 1 (reduce) 73ms
  // let result = []

  // nums.reduce((acc, cur) => {
  //   result.push(acc + cur)
  //   return acc + cur
  // }, 0)

  // return result

  // answer 2 (forEach) 80ms
  // nums.forEach((v, i) => {
  //   if (i === 0) { }
  //   else { nums[i] = nums[i] + nums[i - 1] }
  // })
  // return nums

  // answer 3 (for) 54ms
  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1]
  }

  return nums
}

/********************************************************************************
*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*
*********************************************************************************/

const nums = [3, 1, 2, 10, 1]
console.log(runningSum(nums))//Output: [3, 4, 6, 16, 17]