console.log('line no 1: ' + varName)
var varName = 10
console.log('line no 3: ' + varName)
function fn() {
  console.log('line no 5: ' + varName)
  function b() {
    console.log('line no 8: ' + varName)
  }
  b();
  console.log(varName);
}

fn()
