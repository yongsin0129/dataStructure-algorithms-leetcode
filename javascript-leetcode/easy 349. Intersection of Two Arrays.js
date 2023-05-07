/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 解法 1
var intersection = function (nums1, nums2) {
  let intersection = new Set()
  nums1.forEach((v) => {
    if (nums2.includes(v)) intersection.add(v)
  })
  return [...intersection]
}

// 解法 2 Using two points - O(n log(n) ) Condition: we have to sort the two arrays.
var intersection = function (nums1, nums2) {

  // js . quickSort (n log(n) ) 
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let i = 0
  let j = 0
  const result = []


  while (i < nums1.length && j < nums2.length) {
    // 如果兩個值相同，進入第二層判斷
    if (nums1[i] === nums2[j]) {
      // 需要排除 array 裡面相同的值
      if (i === 0 || nums1[i] !== nums1[i - 1]) {
        result.push(nums1[i])
      }
      i++
      j++
    } else if (nums1[i] < nums2[j]) {
      i++
    } else {
      j++
    }
  }
  return result
}

// 解法 3 counter  O( n + m )
var intersection = function (nums1, nums2) {
  let obj = {}
  let result = []
  
  nums1.forEach((v) => obj[v] = obj[v] ? obj[v] : 1)

  nums2.forEach((v) => {
    if (obj[v] === 1) {
      result.push(v)
      delete obj[v]
    }
  })
  return result
}


/********************************************************************************
*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*
*********************************************************************************/

const nums1 = [1, 2, 2, 1, 5, 6, 8, 11, 19, 20]
const nums2 = [2, 2, 6, 7, 9, 19, 21]
console.log(intersection(nums1, nums2))