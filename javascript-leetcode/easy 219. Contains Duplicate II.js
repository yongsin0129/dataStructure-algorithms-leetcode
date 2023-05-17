// Time Limit Exceeded
var containsNearbyDuplicate10 = function (nums, k) {

  if ((nums.length - k) <= 0) return checkWindow(nums)

  for (let i = 0; i < nums.length - k; i++) {
    let window = nums.slice(i, i + k + 1)
    if (checkWindow(window)) return true
  }

  return false

  function checkWindow (arr) {
    let dict = {}
    for (let i = 0; i < arr.length; i++) {
      if (dict[arr[i]]) return true
      else dict[arr[i]] = true
    }
    return false
  }

}

// 對 window 做優化 => Time Limit Exceeded
var containsNearbyDuplicate20 = function (nums, k) {

  if ((nums.length - k - 1) <= 0) return checkWindow(nums)

  const windowSize = k + 1
  let window = []

  for (let i = 0; i < nums.length; i++) {
    if (i < windowSize - 1) window.push(nums[i])
    else {
      if (i === windowSize - 1) {
        window.push(nums[i])
        if (checkWindow(window)) return true
      } else {
        window.shift()
        window.push(nums[i])
        if (checkWindow(window)) return true
      }
    }
  }

  return false

  function checkWindow (arr) {
    let dict = {}
    for (let i = 0; i < arr.length; i++) {
      if (dict[arr[i]]) return true
      else dict[arr[i]] = true
    }
    return false
  }

}

// 用 hash table
var containsNearbyDuplicate30 = function (nums, k) {

  let dict = {}

  for (let index = 0; index < nums.length; index++) {
    if (dict[nums[index]] === undefined) {
      // create hash table
      dict[nums[index]] = index
    } else {
      let path = index - dict[nums[index]]
      if (path <= k) return true
      dict[nums[index]] = index
    }

  }

  return false
}

// sliding window
var containsNearbyDuplicate = function (nums, k) {

  let window = {}

  for (let i = 0; i < nums.length; i++) {
    
    if (i > k) {
      delete window[nums[i - k - 1]]
    }    
    
    if (window[nums[i]]) return true

    window[nums[i]] = true

  }

  return false
}


const nums1 = [1, 0, 1, 1]
console.log(containsNearbyDuplicate(nums1, 1))

const nums2 = [99, 99]
console.log(containsNearbyDuplicate(nums2, 2))

const nums3 = [1, 2, 3, 1]
console.log(containsNearbyDuplicate(nums3, 3))

const nums4 = [1, 2, 3, 1, 2, 3]
console.log(containsNearbyDuplicate(nums4, 2))

/********************************************************************************
*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105
*
*********************************************************************************/