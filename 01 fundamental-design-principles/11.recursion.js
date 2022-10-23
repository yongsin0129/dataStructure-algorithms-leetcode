function recursion (n) {
  console.log(`we are inside function recursion(${n}) `)
  if (n === 1) return 10
  else return recursion(n - 1) + 15
}

console.log(recursion(1)) // 10
console.log(recursion(10)) // 145