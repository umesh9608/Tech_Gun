/*Global variable vs Local variable
make variable using let,var and const in js */

let car = "Audi"; //Global varialbe
// let car = "tata"; //this is error we can't define same name global variable
//koi bhi variable jo function ke ander define kret hia use locan variable khte hai or function ke bahar jo bhi variable hota h use global var khte hai

function add(){
 let num = 33 ; //Local variable (ye sirf ese function ke liye hi local var h)
 console.log(num);  //this work

 console.log(car) ; //this work because global var can access in global  as well as under the block/function
}
function sub(){
  let num = 40; //this is valid because fun add var is different block and fun sub is different block
  console.log(num);
}

add();
sub();
// console.log(num); //not work because num var in defined under function that's way we cant access outside of the function

