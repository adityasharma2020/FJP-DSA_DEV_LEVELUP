//In JavaScript, a constructor function is a regular function that is used with the new keyword to create objects. 



let name = {
  firstName: 'aditya',
  showDetails: function (city, car) {
    //function inside an object , so this refer to the object itself

    console.log(this.firstName, city, car)
  },
}

let person2 = {
  firstName: 'rahul',
}
//call functions with external arguments.
// name.showDetails.call(person2, 'delhi', 'bmw')

//apply function ,is same as call , but it takes external arguments as an array
// name.showDetails.apply(person2, ['apply', 'funtion'])

//bind function : in case of bind it does not exeute the function, it returns that funiction
let showDetailsBind = name.showDetails.bind(person2, 'bind', 'function')
showDetailsBind()


//-----------------Polyfills-----------------------
//here we are adding a new mybind functon to the Function constructor, so in any function is now 
//which is an instance of Function constructor is an object with this functon
Function.prototype.myBind = function (...args) {
  let obj = this
  let params = args.splice(1)

  return function () {
    obj.apply(args[0],params)
  }
}


let showDetailsMyBind = name.showDetails.myBind(person2,"Mybind","function")
showDetailsMyBind()