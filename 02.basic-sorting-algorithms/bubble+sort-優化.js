function bubbleSort(arr) {
  let step = 0;
  for (let i = 0; i <= arr.length - 2; i++) {
    /********************************************************************************
    *
              優化 : 如果內圈跑完沒有進行任何的 swap , 表示 array 已經排完，外層的 loop 也不需要再進行
              使得 best case O(n) 而不是 O(n2)
    *
    *********************************************************************************/
    let swapping = false; 
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap arr[j] and arr[j - 1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
        swapping = true;
      }
    }
    // 外圈 break
    if (swapping == false) {
      break;
    }
  }
  console.log("It takes " + step + " steps to complete.");
  console.log(arr);
}

bubbleSort([1, 2, 3, 4, 5, 6, 7]);

/********************************************************************************
*
          worst case O(n2)
          best case O(n)
          average case O(n2)
*
*********************************************************************************/
