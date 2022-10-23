/********************************************************************************
*
          array 1 = [1,2,3]
          array 2 = [5,16,1,3]
          尋找交集

          如果使用 兩個迴圈確認 arr1 arr2 會使 O 變成 O(n2)

          使用 counter 的技巧可以將複雜度降低到 O(n)
*
*********************************************************************************/

const array1 = [1, 2, 3]
const array2 = [5, 16, 1, 3]

function counter (arr1, arr2) {
  const array = [...arr1, ...arr2]
  let counter = {}
  let result = []
  array.forEach((v, i) => {
    if (!counter[v]) counter[v] = 1
    else counter[v]++
  })

  for (key in counter) {
    if (counter[key] >= 2) result.push(key)
  }
  console.log(result)
}

counter(array1, array2)
