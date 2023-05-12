var rearrangeArray = function (nums) {
  let rearrangeArray = []
  let evenPointer = 0
  let oddPointer = 1

  nums.forEach((v) => {
    if (v >= 0) {
      rearrangeArray[evenPointer] = v
      evenPointer += 2
    }
    else {
      rearrangeArray[oddPointer] = v
      oddPointer += 2
    }
  })

  return rearrangeArray
};

/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * // 這個方法會超過時間
 * 
 */
var rearrangeArray1 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || i % 2 === 0) {
      // even nums[i] must be positive
      if (nums[i] < 0) {
        let index = i
        // loop until find positive
        let flag = true
        while (flag) {
          index++
          if (nums[index] > 0) {
            let value = nums.splice(index,1)[0]
            let position = i
            nums.splice(position, 0, value)
            flag = false
          }

        }
      }
    } else {
      // old nums[i] must be negative
      if (nums[i] > 0) {
        let index = i
        // loop until find negative
        let flag = true
        while (flag) {
          index++
          if (nums[index] < 0) {
            let value = nums.splice(index, 1)[0]
            let position = i
            nums.splice(position, 0, value)
            flag = false
          }
        }
      }
    }
  }

  return nums
};

/********************************************************************************
*
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should rearrange the elements of nums such that the modified array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

 

Example 1:

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
Example 2:

Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].
 

Constraints:

2 <= nums.length <= 2 * 105
nums.length is even
1 <= |nums[i]| <= 105
nums consists of equal number of positive and negative integers.
*
*********************************************************************************/

const nums = [3, 1, -2, -5, 2, -4]
// Output: [3, -2, 1, -5, 2, -4]
console.log(rearrangeArray(nums))