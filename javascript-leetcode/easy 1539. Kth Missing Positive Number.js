/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let i = 1

  while (true) {
    if (arr.indexOf(i) === -1) k--
    if (k === 0) return i


    i++
  }
}
/********************************************************************************
*
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

 

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.
 

Constraints:

1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length
 

Follow up:

Could you solve this problem in less than O(n) complexity?
*
*********************************************************************************/


// O(n) 
var findKthPositive = function (arr, k) {
  let idx = 0
  let num = 1
  while (k > 0) {
    arr[idx] === num ? idx++ : k--
    num++
  }
  return num - 1
}

// O( log n) 
function findKthPositive (arr, k) {
  // Initialize pointers:
  //    left  - before first index
  //    mid   - on first index
  //    right - after last index
  let [left, mid, right] = [-1, 0, arr.length]

  // Move pointers like it's binary search
  // Answer is always between `left` and `right`, so once
  // distance between pointers equals 1 we can calculate the answer
  while (right - left > 1) {
    // Get amount of missed numbers between `mid` and `left` pointers
    const missedOnLeft = arr[mid] - (arr[left] ?? 0) - (mid - left)

    if (missedOnLeft >= k) {
      right = mid
    } else {
      left = mid
      k -= missedOnLeft // target number become closer
    }

    mid = Math.trunc((left + right) / 2)
  }

  return (arr[left] ?? 0) + k
}