maxSum([2, 7, 3, 7, 25, 0, 6, 1, -5, 12, -11], 3); // 35

function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  // 先計算出第一個 window 內的值
  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  // 開始對 window 外右邊第一個值操作到最後一個值
  let tempValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    // 將 window 值加上 window 右邊第一個值，再減去 window 左邊第一個值
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue > maxValue) { // 這邊改成 小於 就是 minSum function
      maxValue = tempValue;
    }
  }

  console.log(maxValue);
  return maxValue;
}
