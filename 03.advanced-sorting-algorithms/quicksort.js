let arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666];
quickSort(0, arr.length - 1);
console.log(arr);

function partition(p, r) {
  let x = arr[r]; // pivot
  let i = p - 1;
  for (let j = p; j <= r - 1; j++) {
    if (arr[j] <= x) {
      i += 1;
      // swap arr[i] and arr[j]
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  // swap arr[i+1] and arr[r]
  let temp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = temp;

  return i + 1;
}

function quickSort(p, r) {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
}

/********************************************************************************
*
          worst case O(n2)
          best case O(nlogn)
          average case O(nlogn)

          mergeSort 的 缺點，每一次的 partition 如果拿到的 index 都是最大值 OR 最小值，則複雜度增加一個量級
*********************************************************************************/
