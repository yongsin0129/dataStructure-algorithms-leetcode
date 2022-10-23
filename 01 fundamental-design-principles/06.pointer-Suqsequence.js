/********************************************************************************
*
          確認 str1 是不是 str2 的 subsequence 
          也就是 str2 刪掉部份的字會等於 str1
*
*********************************************************************************/

// isSubsequence("hello", "hello Dear"); // true
// isSubsequence("book", "brooklyn"); // true
isSubsequence("abc", "bac"); // false (order matters)
// isSubsequence("", "abc"); // true

function isSubsequence(str1, str2) {
  if (str1.length == 0) {
    console.log(true);
    return true;
  }

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    if (pointer1 >= str1.length) {
      console.log(true);
      return true;
    }
    pointer2++;
  }

  console.log(false);
  return false;
}
