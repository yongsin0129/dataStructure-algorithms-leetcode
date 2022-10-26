let unsorted = [14, -4, 17, 6, 22, 1, -5];

insertionSort(unsorted);

function insertionSort(arr) {
  for (let j = 1; j <= arr.length - 1; j++) {
    // 需要檢查 element 要插在那一個 index , 所以先用變數 *key* 來存
    let key = arr[j];
    i = j - 1;
    // i 從右邊往左邊檢查，如果 array 的值大於 key，就要將 array 的值往右邊移一格
    // 然後 i -- ，繼續檢查 array 的值
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    // 最後將 key 插入
    arr[i + 1] = key;
  }

  console.log(arr);
  return arr;
}

/********************************************************************************
*
          worst case O(n2)
          best case O(n)
          average case O(n2)
*
*********************************************************************************/

