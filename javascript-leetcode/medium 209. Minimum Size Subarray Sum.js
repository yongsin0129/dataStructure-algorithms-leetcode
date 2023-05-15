// Time Limit Exceeded O(n**2)
var minSubArrayLen1 = function (target, nums) {
  let length = 0
  let leftPointer = 0
  let rightPointer = nums.length - 1
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  if (sum >= target) length = rightPointer - leftPointer + 1
  else return length

  let A = sum
  for (let i = leftPointer; i < nums.length; i++) {
    if (i !== 0) A -= nums[i - 1]
    let B = A

    for (let j = rightPointer; j >= leftPointer; j--) {
      if (j !== rightPointer) B -= nums[j + 1]
      if (B >= target) length = Math.min(length, j - i + 1)
    }

  }

  return length
}


// binary search O(n * log(n))   => Time Limit Exceeded
var minSubArrayLen2 = function (target, nums) {
  let minLen = Infinity
  let windowSize = null

  while (windowSize !== minLen && windowSize < nums.length) {
    if (windowSize === null) windowSize = nums.length

    if (isWindowExist(target, nums, windowSize)) {
      minLen = Math.min(minLen, windowSize)
      windowSize = Math.floor(windowSize / 2)
    } else {
      windowSize++
    }
  }

  function isWindowExist (target, nums, windowSize) {
    let sum = 0
    for (let i = 0; i < windowSize; i++) {
      sum += nums[i]
    }

    for (let i = 0; i < nums.length - windowSize + 1; i++) {
      if (i === 0) { }
      else { sum = sum - nums[i - 1] + nums[i + windowSize - 1] }

      if (sum >= target) return true
    }

    return false
  }

  return minLen === Infinity ? 0 : minLen
}

// plus right , minus left  , loop 2n => O(n)
var minSubArrayLen3 = function (target, nums) {
  let left = 0
  let right = 0
  let minLength = Infinity
  let sum = 0

  // plus right
  while (right < nums.length) {
    sum += nums[right]

    // minus left 
    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1)
      sum -= nums[left]
      left++
    }

    right++
  }

  return minLength === Infinity ? 0 : minLength
}
/********************************************************************************
*
Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
*
*********************************************************************************/

// 網友解法
const minSubArrayLen10 = function (s, nums) {
  let left = 0
  let right = 0
  let sum = 0
  let result = 0

  while (right < nums.length) {
    sum += nums[right]

    while (sum >= s) {
      let len = right - left + 1
      if (result === 0 || len < result) result = len
      sum -= nums[left]
      left++
    }

    right++
  }

  return result
}

const minSubArrayLen11 = function (s, nums) {
  let start = 0
  let end = 0
  let minValue = Infinity
  let subarraySum = nums[0]
  while (start <= end && end < nums.length) {
    if (subarraySum >= s) {
      minValue = Math.min(minValue, end - start + 1)
      subarraySum -= nums[start]
      start++
    } else {
      end++
      subarraySum += nums[end]
    }
  }
  return minValue === Infinity ? 0 : minValue
}

const target1 = 7, nums1 = [2, 3, 1, 2, 4, 3]
// Output: 2   4+3
console.log(minSubArrayLen3(7, nums1))

const target2 = 4, nums2 = [1, 4, 4]
// Output: 1    4
console.log(minSubArrayLen3(4, nums2))

const target3 = 11, nums3 = [1, 1, 1, 1, 1, 1, 1, 1]
// Output: 0   noun
console.log(minSubArrayLen3(11, nums3))

const target4 = 213, nums4 = [12, 28, 83, 4, 25, 26, 25, 2, 25, 25, 25, 12]
// Output: 8   noun
console.log(minSubArrayLen3(213, nums4))

const target5 = 15, nums5 = [1, 2, 3, 4, 5]
// Output: 5   noun
console.log(minSubArrayLen3(15, nums5))

/********************************************************************************
*
          說明 :

// brutal  => Time Limit Exceeded O(n**2)
[2, 3, 1, 2, 4, 3]
[2, 3, 1, 2, 4]               
[2, 3, 1, 2]
[2, 3, 1]
   [3, 1, 2, 4, 3]
   [3, 1, 2, 4]
   [3, 1, 2]
       [1, 2, 4, 3]
       [1, 2, 4]
       [1, 2]


// binary search O(n * log(n))   => Time Limit Exceeded
[2, 3, 1, 10 ,2 , 4, 3 , 1]

windowSize = array.length   // ex:8

if windowExist => windowSize = windowSize/2  ex : 4
else windowSize ++    ex : 5 , 6 , 7

until windowSize = minLen


// plus right , minus left  , O(2n) => O(n)
[2, 3, 1, 10, 4, 3]

[]



              [4,3]
*
*********************************************************************************/