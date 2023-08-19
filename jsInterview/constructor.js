function Person(name) {
    this.name = name;
    this.age = 25
  }

  const person1 = new Person('Alice');
console.log(person1); // Output: "Alice"


Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };

  person1.sayHello();