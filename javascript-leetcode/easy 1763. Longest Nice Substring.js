// 沒有完成的 fn
var longestNiceSubstring10 = function (s) {

  let dict = {}

  for (let i = 0; i < s.length; i++) {
    console.log(s[i])

    // string 為大寫
    if (s[i].toUpperCase() === s[i]) {
      // check dict 有沒有存在小寫
      if (dict[s[i].toLowerCase()] === false || dict[s[i].toLowerCase()] === true) {
        dict[s[i].toLowerCase()] = true
        dict[s[i]] = true
      } else dict[s[i]] = false
    }
    // string 為小寫
    else {
      // check dict 有沒有存在大寫
      if (dict[s[i].toUpperCase()] === false || dict[s[i].toUpperCase()] === true) {
        dict[s[i].toUpperCase()] = true
        dict[s[i]] = true
      }
      else dict[s[i]] = false
    }

    console.log(dict)
  }

}

// 使用 Set + divided and conquer
var longestNiceSubstring = function (s) {
  if (s.length < 2) return ""

  let arr = [...s]
  let set = new Set(arr)

  for (let i = 0; i < arr.length; i++) {
    const c = arr[i]

    if (set.has(c.toUpperCase()) && set.has(c.toLowerCase())) continue

    const sub1 = longestNiceSubstring(s.substring(0, i))
    const sub2 = longestNiceSubstring(s.substring(i + 1))

    return sub1.length >= sub2.length ? sub1 : sub2
  }

  return s
};

const s = "YazaAay" // Output: "aAa"
console.log(longestNiceSubstring(s))
/********************************************************************************
*
A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, "abABB" is nice because 'A' and 'a' appear, and 'B' and 'b' appear. However, "abA" is not because 'b' appears, but 'B' does not.

Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

 

Example 1:

Input: s = "YazaAay"
Output: "aAa"
Explanation: "aAa" is a nice string because 'A/a' is the only letter of the alphabet in s, and both 'A' and 'a' appear.
"aAa" is the longest nice substring.
Example 2:

Input: s = "Bb"
Output: "Bb"
Explanation: "Bb" is a nice string because both 'B' and 'b' appear. The whole string is a substring.
Example 3:

Input: s = "c"
Output: ""
Explanation: There are no nice substrings.
 

Constraints:

1 <= s.length <= 100
s consists of uppercase and lowercase English letters.
*
*********************************************************************************/