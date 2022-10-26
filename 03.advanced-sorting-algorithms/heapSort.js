let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666];
// heapSize and arr are global variables
heapSort();
console.log(arr);

function buildMaxHeap() {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
}

function maxHeapify(i) {
  let largest;
  let l = i * 2 + 1;
  let r = i * 2 + 2;
  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l;
  } else {
    largest = i;
  }

  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest != i) {
    // swap A[i] with A[largest]
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
}

function heapSort() {
  buildMaxHeap();
  for (let i = arr.length - 1; i >= 0; i--) {
    // exchange A[0] with A[i]
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize -= 1;
    maxHeapify(0);
  }

  return arr;
}

/********************************************************************************
*
          worst case O(nlogn)
          best case O(nlogn)
          average case O(nlogn)

          mergeSort 分析 : 

          組成
          buildMaxHeap : 一個 loop 裡面要跑 maxHeapify
          maxHeapify : O(logN) 最多執行次數為 Binary Tree 的 layer 數

          結論
          mergeSort = buildMaxHeap + loop 裡面包一個 maxHeapify
          O(n) + O(nLogN) = O(nLogN)

          備註:實際計算後 buildMaxHeap 為 O(n) ，但不影響 mergeSort 的 O

*
*********************************************************************************/
