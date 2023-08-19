function outer() {
  let counter = 0
  console.log('outer', counter)
  function inner() {
    counter++
    console.log('inner', counter)
    function innerMost() {
      counter++
      console.log('innerMost', counter)
    }

    return innerMost
  }
  return inner
}

let fn = outer()
let innermost = fn()
innermost()
innermost()
