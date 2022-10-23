let unsorted = [14, -4, 17, 6, 22, 1, -5];

selectionSort(unsorted);

function selectionSort(arr) {
  // 由左到右 一個一個檢查
  for (let i = 0; i <= arr.length - 2; i++) {
    // 先假設第一項就是整個 array 最小值
    let minIndex = i;
    // 用 loop 檢查其他項有無小於 arr[miniIndex]
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // swap arr[minIndex] and arr[i]
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    // 將最小值丟到左邊 index = i 的格子
    arr[i] = temp;
    console.log(arr);
  }

  console.log(arr);
  return arr;
}

/********************************************************************************
*
          worst case O(n2)
          best case O(n2)
          average case O(n2)
*
*********************************************************************************/
