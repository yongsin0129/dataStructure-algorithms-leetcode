/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = ''

  // 對 array 的第一個 word 做 loop , 
  for (let i = 0; i < strs[0].length; i++) {
    const currentPrefix = strs[0][i]
    let samePrefix = true

    // 對 array 的其他元素做 loop
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== currentPrefix) {
        samePrefix = false
        break
      }
    }

    // 比對都正確就放入 result 內
    if (!!samePrefix) result += currentPrefix
    else break
  }

  return result
}

/********************************************************************************
*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*
*********************************************************************************/

const strs1 = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(strs1)) // "fl"

const strs2 = ["dog", "racecar", "car"]
console.log(longestCommonPrefix(strs2)) // ""


/********************************************************************************
*
另外一種解法 :

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}

思路 : 將 array 的第一個 word 全部當成 prefix 
對 array 其他元素做 loop 
如果其他元素無法 match prefix ，則 prefix -1 至到符合或為空
*
*********************************************************************************/