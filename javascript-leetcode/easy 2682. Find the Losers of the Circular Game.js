/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  // 1 create playerList dict
  let playerList = {}
  for (let i = 1; i <= n; i++) {
    playerList[i] = false
  }

  // while loop for ball change
  let constNumber = 1
  let numberK = k
  let position = 1

  while (true) {
    if (!!playerList[position]) break
    else playerList[position] = true

    numberK = constNumber * k
    position = (position + numberK) % n === 0 ? n : (position + numberK) % n
    constNumber++
  }

  // check who is losers
  let losers = []
  for (key in playerList) {
    if (playerList[key] === false) losers.push(key)
  }
  return losers
}

console.log(circularGameLosers(5, 3)) // [2,3]