//JavaScript has no datatypes
//JavaScript has only let var and const in which we can declare a variable
//let and const are block scoped
//block scoped means variable has life time inside the block only

//hoisting is a property in which we can use the variable without even decalaring it.
//hoisting is not possible in let and const. hoisting is possible only in var.

//let and const are not hoisted.
//let and const in which let can be reassigned but const cannot be reassigned
//scope: var is functional scoped
//       let and const are block scoped {}

//re-declaration:  var can be redecalred
//                 let and const cannot be re-declared

//re-assignment: var and let can be reassigned but const cannot be reassigned.

//initilisation: Optional in case of var and let
// a = 10;
// a = 50;
// console.log(a); //10 50
// if (true) {
//   a = 20;
//   console.log(a); //20
// }
// console.log(a);
//var is getting more priority because of functional scope

// console.log(a);   a is not const


//Usage: without even declare we can use a var
//       but we can not use let and const without declaration
//we can differentiate them on the basis of the following parameters:
//scope, hoisting, re-assignment, re-decalration, usage, initialisation
// it will automatically detect the datatype of the data
// and convert it to the appropriate type
// a = 10;
// b = 10.5;
// c = "a";
// d = "asjkdnaksda";
// e = false;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);
//JavaScript has two version
//front End Javascript ===>vanila js
//Backend JavaScript ===>nodejs
//nodejs is a runtime environment for javascript
//runtime enviroment ===> a complier who is responsible to run the javascript code in your machine

//previously javascript is a language that is only compatible with browser
//but now we can run javascript code in our machine using nodejs

//JavaScript===> event handler, dom manipulators.
//nodejs===> file system, http server, database, etc.

//core javaScript ==>datatype, conditional statements, loops, functions

//Frameworks ==>nodejs express and all other dependecies that are responsible to run a backend we need the basics of the javascript

//Goal : to create an api link that is responsible to get data from database and responsible to send data from front end to backend to database
//function decalartion
//1. Named function
//2. Annoynomous Function
//3. Arrow Function/ annoynomous arrow function
//4.Expressional Function
//5. Expressional Arrow Function
//6. IIFE (Immediately Invoked Function Expression)
//7. Function Constructor
//8. Function Prototype
//9. Function Declaration
//10. Function Expression


//Named function
// function add(a, b) {
//   return a + b;
// }
// console.log(add(3, 5));

//Anonoymous function : which has no name ====>expressional function

// const sum = function (a, b) {
//   return a + b;
// };
// console.log(sum(3, 5));

//Arrow:  annoymous arrow function === expressional arrow function

// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(3, 5));

//IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("Hello");
})();

((a, b) => {
  console.log(a + b);
})(3, 5);

// Function Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Janhvi", 30);
console.log(p1.name);
console.log(p1.age);
