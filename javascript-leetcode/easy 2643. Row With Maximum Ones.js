/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
  let array = []
  mat.forEach((v, i) => {
    array[i] = 0
    v.forEach((v) => {
      if (v === 1) array[i]++
    })
  })
  let max = 0
  let index = 0
  array.forEach((v, i) => {
    if (v > max) {
      max = v
      index = i
    }
  })

  return [index, max]
}

Math.sum()
/********************************************************************************
*
Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.

In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.

Return an array containing the index of the row, and the number of ones in it.

 

Example 1:

Input: mat = [[0,1],[1,0]]
Output: [0,1]
Explanation: Both rows have the same number of 1's. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1]. 
Example 2:

Input: mat = [[0,0,0],[0,1,1]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].
Example 3:

Input: mat = [[0,0],[1,1],[0,0]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].
*
*********************************************************************************/
const mat1 = [[0, 1], [1, 0]]
console.log(rowAndMaximumOnes(mat1))

const mat2 = [[0, 0, 0], [0, 1, 1]]
console.log(rowAndMaximumOnes(mat2))

const mat3 = [[0, 0], [1, 1], [0, 0]]
console.log(rowAndMaximumOnes(mat3))
