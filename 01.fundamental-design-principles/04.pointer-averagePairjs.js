/********************************************************************************
*
  pointer 技功   適用在 sorted array 

  原本需要寫兩個 loop 去確認 pair  O(n2)
  
  使用 pointer 則 O(n)
*
*********************************************************************************/

// 需要在一個 array 中尋找 pair 的平均值為 1.5
averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

function averagePair(arr, avg) {
  let left = 0; // 左邊指針
  let right = arr.length - 1; // 右邊指針
  let result = []; // 答案

  while (right > left) {
    let temp_avg = (arr[right] + arr[left]) / 2;

    // 左右指針所指的值總和平均大於 1.5 , 因為知道是 sorted array ，所以右邊值大，左邊值小
    if (temp_avg > avg) {
      right--;
    // 左右指針所指的值總和平均小於 1.5
    } else if (temp_avg < avg) {
      left++;
    // 找到符合條件的 pair
    } else if (temp_avg == avg) {
      result.push([arr[right], arr[left]]);
      right--;
      left++;
    }
  }

  console.log(result);
  return result;
}
