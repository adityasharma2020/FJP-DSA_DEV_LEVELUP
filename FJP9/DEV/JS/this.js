// <====================RULES =============>

// 1. the value of this is evaluated during the run time.
// 2.value of this is evaluated during the run time.
// 3.this points to that object from where the fucntion is called.


//1
// function type1(){
//   console.log(this.name);
// }

// var name = "javascript";
// type1();//when function is called globally , this always points to window object.

// //2
// function type2(){
//   console.log(this.lname);
// }
// var lname = "tiwari";
// var obj = {
  
// }

var food ="pziza";
var obj = {
  food :"psata",
  eat(){
    console.log(this.food);
  }
}

var foo = obj.eat;
foo();


var length =1;
function square(){
  let cb = function (){
    console.log(this.length *this.length);
  }
  setTimeout(cb,2000);
}

var object ={
  length :3,
  square
}
obj.square();
