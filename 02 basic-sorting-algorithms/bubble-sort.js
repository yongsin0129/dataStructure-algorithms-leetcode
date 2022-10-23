function bubbleSort(arr) {
  let step = 0;
  // 從 array 左邊開始， sorted element 
  for (let i = 0; i <= arr.length - 2; i++) {
    // 從 array 右邊開始, pointer
    for (let j = arr.length - 1; j >= i + 1; j--) {
      if (arr[j] < arr[j - 1]) {
        // swap arr[j] and arr[j - 1]
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        step++;
      }
    }
  }
  console.log("It takes " + step + " steps to complete.");
  console.log(arr);
}

let test = [];

for (let i = 0; i < 100; i++) {
  test.push(Math.floor(Math.random() * 100));
}
console.log(test)
bubbleSort(test);


