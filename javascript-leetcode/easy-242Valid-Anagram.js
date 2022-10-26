/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const sObj = {}
  const tObj = {}
  const sArray = [...s]
  const tArray = [...t]
  if (sArray.length !== tArray.length) return false
  sArray.forEach(v => (sObj[v] = sObj[v] ? sObj[v] + 1 : 1))
  tArray.forEach(v => (tObj[v] = tObj[v] ? tObj[v] + 1 : 1))
  return Object.keys(sObj).every(key => sObj[key] === tObj[key])
}

const s = 'aa'
const t = ''

console.log(isAnagram(s, t))
