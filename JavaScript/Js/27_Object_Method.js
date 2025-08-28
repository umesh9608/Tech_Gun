/*Method in Object: i koi bhi function jo object ke sath juda hua ho use method khte hai */
// let person = {
//   firstName:'sohan',
//   lastName:'das',
// }

// type 1
/*person.sayHello = function(){
  console.log("Hello");
}

person.sayHello();
*/

//type 2
/*let person = {
  firstName:'sohan',
  lastName:'das',
}

function greet(){
  console.log("Hello");
}

person.sayHello = greet;  //person ka sayHello name se ek object bnaya or usme funcion ko rkh diya
person.sayHello();
*/

//type 3
/*let person = {
  firstName:'sohan',
  lastName:'das',
  sayHello: function(){
    console.log("Hello");
  }
}

person.sayHello();
*/

//type 4 (es6)
let person = {
  firstName:'sohan',
  lastName:'das',
  sayHello(){
    console.log("Hello !");
  }
}

person.sayHello();

