async function myFunc () {
  return 1
}

async function myOtherFunc () {
  const result = await myFunc()
  return 2 + result
}

const a = myOtherFunc()
console.log(a)
