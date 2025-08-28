// Hoisting ka matlab to lift to pull (kitchna ya uthana)
// function hello(){
//   console.log("Hello world");
// }
// hello();

//----this is normal but now we use hoisting---

hello(); //eska mtlab phle use kr liya gya baad me decleare kiya gya h bt js me kr stke h ese ko khte h hoisting 

/*js me ese phle ki code run ho js interprater ek baar pure ke pure file ko pdhta h ki kha kha decleration h chache wha  variable ya function  ho uske baad khud se  utha kr phle rk deta h phir code execute krta hai */ 

function hello(){
  console.log("Hello world");
}

// -------------same variable me--------
x= 7;
console.log(x);
var x; //7

// --------------
console.log(y); //this show undefined (quki sirf decleration parts ko upper le jata h )
y= 17;
var y;

//-------------
console.log(z); //show undefined
var z = 12;



//--------------
// console.log(ab); //this show error not show undefined
let ab;
ab=22;

// -----strict mode-------  
/*  "use strict"   likhna hota h */
as=4;
console.log(as); //4