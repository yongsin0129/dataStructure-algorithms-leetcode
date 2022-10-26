const main = (s) => {

  const resultArr= ['']
  const timesStack= []
  let times = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (Number.isSafeInteger(Number(char))) {
      times = 10 * times + Number(char)
    } else if (char === '[') {
      timesStack.push(times)
      resultArr.push('')
      times = 0
    } else if (char === ']') {
      const times = timesStack.pop()
      const subStr = resultArr.pop()
      resultArr[resultArr.length - 1] += subStr.repeat(times)
    } else {
      resultArr[resultArr.length - 1] += char
    }
  }

  return resultArr[0]
}


/********************************************************************************
*
  測試
*
*********************************************************************************/

console.log('3[a]2[bc] : ', main('3[a]2[bc]'))
console.log('3[a2[c]] : ', main('3[a2[c]]'))
console.log('zxcv | (3)[a2[c2[x]]] | opi : ', main('zxcv|3[a2[c2[x]]]|opi'))

