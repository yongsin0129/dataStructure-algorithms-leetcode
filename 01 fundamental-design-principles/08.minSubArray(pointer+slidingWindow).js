function minSubArray(arr, sum) {
  // 設計兩個 pointer 都從最左邊開始
  let start = 0;
  let end = 0;
  // total 變數用來判斷 array 相加的值有無超過 sum
  let total = 0;
  // minLength 用來存 array 的最短長度
  let minLength = Infinity;

  // 當 pointer:start跑完整個 array 為結束
  while (start < arr.length) {

    // case 1 : array內元素相加不超過 sum , 且 pointer:end沒有跑完
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } 
    // case 2 : array內元素相加不超過 sum
    else if (total >= sum) {
      let currentLength = end - start;
      if (minLength > currentLength) {
        minLength = currentLength;
      }
      total -= arr[start];
      start++;
    }
    // case 3 : pointer:end 跑完整個 array , 中止 loop
    else if (end >= arr.length) {
      break;
    }
  }

  if (minLength === Infinity) {
    console.log("Cannot find subarray that can sum up to the given number");
    return 0;
  } else {
    console.log(minLength);
    return minLength;
  }
}

// 找到一個最短長度的 subArray ( array 內元素相加的值會超過 sum )
minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 70);
