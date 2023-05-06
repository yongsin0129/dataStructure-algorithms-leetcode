async function FN1 () {

  async function logAsync (...args) {
    console.log(...args)
  }

  async function main () {
    logAsync(1).then(() =>
      console.log(2))

    console.log(3)

    await logAsync(4).then(() =>
      console.log(5))


    console.log(6)
  }


  main()// void 明確表示捨棄回值
  console.log("hello world")


}

function FN2 () {

  function logAsync (...args) {
    return new Promise((resolve, reject) => {
      console.log(...args)
      resolve()
    })
  }

  function main () {
    logAsync(1)
      .then(() => console.log(2))

    console.log(3)

    logAsync(4)
      .then(() => console.log(5))
      .then(() => console.log(6))
  }

  main()// void 明確表示捨棄回值
  console.log("hello world")

}

