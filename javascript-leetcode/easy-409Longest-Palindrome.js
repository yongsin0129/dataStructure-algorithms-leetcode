/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let number = 0
  let counter = {}

  // 使用 counter 計算每個字母出現的次數
  for (let index = 0; index < s.length; index++) {
    if (counter[s[index]] === undefined) { counter[s[index]] = 1 }
    else counter[s[index]]++
  }

  // 針對字數的出現次數分成雙數及奇數
  let oddNumberArray = []
  Object.values(counter).forEach((value) => {
    // 雙數一定可以組成 Palindrome，所以全部加總
    if (value % 2 === 0) number += value

    // 單數有例外情況，需分流處理
    else oddNumberArray.push(value)
  })

  // 把雙數的結果與單數的結果相加
  number += countTotalOddNumber(oddNumberArray)

  // return 結果
  return number


  // 單數只有最大的可以組成 Palindrome，剩下的都要減 1變成雙數，最後將所有數字加起來
  function countTotalOddNumber (oddNumberArray) {
    let totalOddNumber = 0

    // 沒有任何奇數，直接 return
    if (oddNumberArray.length === 0) return totalOddNumber

    // 存在奇數，先找最大值，剩下的全部 -1 變雙數之後再相加
    const maxOddNumber = Math.max(...oddNumberArray)

    //  (有可能會有最大值重複的問題，所以設計一個 flag)
    let isMaxOddNumberOccupied = false
    oddNumberArray.forEach((value, index) => {
      if (value === maxOddNumber && isMaxOddNumberOccupied === false) isMaxOddNumberOccupied = true
      else totalOddNumber += value - 1
    })

    return totalOddNumber + maxOddNumber
  }
}

const case1 = "abccccdd"
const case2 = "aaaAaaaa"
const case3 = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
const case4 = "bb"
const case5 = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"

console.log(longestPalindrome(case1)) // 7
console.log(longestPalindrome(case2)) // 7
console.log(longestPalindrome(case3)) // 983
console.log(longestPalindrome(case4)) // 2
console.log(longestPalindrome(case5)) // 867