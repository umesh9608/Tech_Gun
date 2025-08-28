/*Immediately invoked function :-ab tk hmlog phle function bnate the phir use krte the bt ab hm chachte hai ki koi function bnaye or turant use kiya jise */

/*let callFu = function (){ //ye h anonymous function
  console.log("Helllo world");
}

callFu();
*/

//-------iif----ese q use kre 1.jb hme globle space me memory accupy nhi krna h to (use and memory free)  2.code conflict se bachte h
(function(){
  let string = "say";
  console.log(string);
  console.log("Hello World");
})();