// //allowed us to create new specialized functions ,with partial inputs
// let multiply = function (x, y) {
//   console.log(x * y)

//   console.log("hello",this);
// }
// multiply(2,5)
// //function currying using bind, now function is more specilaized and it multiply every no with 2
// let multipyBy2 = multiply.bind(this, 2)
// multipyBy2(3)

// // function currying usning closures.

// //basically bind() is also doing the same thing as it binds the given fuction
// // to a new function , and here we are manully wrapping it around the funtion
// //and using the concept
// //of closure we know that a children function has also have the access
// // to the variables of its parents via lexical scope
// function add(x){
//     return function(y){
//         console.log(x + y)
//     }
// }

// let addWith2 = add(2);
// addWith2(3)


