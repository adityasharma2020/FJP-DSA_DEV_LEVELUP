function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x(); // 7

function outer() {
  var a = 7;
  function inner() {
    console.log(a);
  }
  return inner;
}
var ans = outer();
console.log(ans);
