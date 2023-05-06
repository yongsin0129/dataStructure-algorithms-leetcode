/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// solve1
// var isAnagram = function (s, t) {
//   const sObj = {}
//   const tObj = {}
//   const sArray = [...s]
//   const tArray = [...t]
//   if (sArray.length !== tArray.length) return false
//   sArray.forEach(v => (sObj[v] = sObj[v] ? sObj[v] + 1 : 1))
//   tArray.forEach(v => (tObj[v] = tObj[v] ? tObj[v] + 1 : 1))
//   return Object.keys(sObj).every(key => sObj[key] === tObj[key])
// }

// 解題思路 :
// step 1 : 將 string s 放入 Map
// step 2 : 將 map 做 loop 來比對 string t , 有 key 且值相等則將 key delete
// 完全比對完則為 anagram , 否則就是 false

// solve2  - new Map()
// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false

//   const charCount = new Map()

//   // 先用 string s 創建一個 map
//   for (char of s) {
//     if (charCount.has(char)) charCount.set(char, charCount.get(char) + 1)
//     else charCount.set(char, 1)
//   }

//   // 對 string t 做 loop , 比對 map , 無 key 就 false , 有 key 就減 1 
//   for (char of t) {
//     if (!!charCount.has(char)) {
//       charCount.set(char, charCount.get(char) - 1)
//       if (charCount.get(char) === 0) charCount.delete(char)
//     }
//     else {
//       return false
//     }
//   }
//   return true
// }

// solve3 - counter object
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const charCount = {}

  // 先用 string s 創建一個 counter obj
  for (char of s) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1
  }

  // 對 string t 做 loop , 比對 counter , 無 key 就 false , 有 key 就減 1 
  for (char of t) {
    if (!charCount[char]) return false
    else {
      charCount[char] -= 1
      if (charCount[char] === 0) delete charCount[char]
    }
  }

  return true
}

/********************************************************************************
*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*
*********************************************************************************/

const s1 = "anagram"
const t1 = "nagaram"
console.log(isAnagram(s1, t1))

const s2 = "aacc"
const t2 = "ccac"
console.log(isAnagram(s2, t2))