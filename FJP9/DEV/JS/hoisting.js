// // console.log(a);

// var a = 10;

// function fun() {
//   console.log('helllo world!');
// }
// // console.log(fun());
// fun()

function a(){
  c();
  function c(){
    console.log(b);
  }
}

a();
var b = 10;
console.log(b);