/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = {}
  if (nums.length === 1) {
    return nums[0]
  }

  for (let i = 0; i < nums.length; i++) {
    // 第一次出現的元素，放到map    not in map, push element and set count = 1
    if (!map[nums[i]]) {
      map[nums[i]] = 1
    } else {
      // 出現過的元素，數量增加    element exist, count++
      map[nums[i]]++
      // 判斷這個元素出現的次數 > n/2
      if (map[nums[i]] >= nums.length / 2) {
        return nums[i]
      }
    }
  }
}
