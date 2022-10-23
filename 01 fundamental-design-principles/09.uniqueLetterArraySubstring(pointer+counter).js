function uniqueLetterString(str) {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;

  while (end < str.length) {
    console.log(counter);
    // case 1 發現重複的字
    if (counter[str[end]]) {
      counter[str[start]]--;
      start++;
    } 
    // case 2 字不重複
    else {
      counter[str[end]] = 1;
      end++;
      if (end - start > maxLength) { // 如果tempLength 較長，就取代 變數 maxLength
        maxLength = end - start;
      }
    }
  }

  if (maxLength == -Infinity) {
    console.log("Cannot find unique letters substring.");
    return null;
  }

  console.log(maxLength);
  return maxLength;
}

uniqueLetterString("thisishowwedoit"); // 6
