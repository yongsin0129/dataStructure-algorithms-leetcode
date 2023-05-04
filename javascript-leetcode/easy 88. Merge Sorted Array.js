/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

  //解法1 fail
  // let pointer1 = 0
  // let pointer2 = 0
  // let answer = []

  // while (pointer1 < m | pointer2 < n) {
  //   if (pointer1 < m & nums1[pointer1] <= nums2[pointer2] | pointer2 >= n) {
  //     answer.push(nums1[pointer1])
  //     pointer1++
  //   }
  //   if (pointer2 < n & nums1[pointer1] > nums2[pointer2] | pointer1 >= n) {
  //     answer.push(nums2[pointer2])
  //     pointer2++
  //   }
  // }

  // return answer

  //解法2
  // let pointer1 = 0
  // let pointer2 = 0
  // const nums1Ref = [...nums1]
  // for (let index = 0; index < m + n; index++) {
  //   if (pointer2 >= n | pointer1 < m & nums1Ref[pointer1] <= nums2[pointer2]) {
  //     nums1[index] = nums1Ref[pointer1]
  //     pointer1++
  //   } else if (pointer1 >= m | pointer2 < n & nums1Ref[pointer1] > nums2[pointer2]) {
  //     nums1[index] = nums2[pointer2]
  //     pointer2++
  //   }
  // }

  // return nums1


  // 解法3 倒敘
  let pointer1 = m - 1
  let pointer2 = n - 1

  for (let index = m + n - 1; index >= 0; index--) {
    if (pointer2 < 0 | pointer1 >= 0 & nums1[pointer1] >= nums2[pointer2]) {
      nums1[index] = nums1[pointer1]
      pointer1--
    } else if (pointer1 < 0 | pointer2 >= 0 & nums1[pointer1] < nums2[pointer2]) {
      nums1[index] = nums2[pointer2]
      pointer2--
    }
  }

  return nums1
}


const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6]
const n = 3
console.log(merge(nums1, m, nums2, n))

const nums11 = [1,0]
const mm = 1
const nums22 = [2]
const nn = 1
console.log(merge(nums11, mm, nums22, nn))
/********************************************************************************
*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*
*********************************************************************************/