/*Anonymous function ka matlab ek esa function jiska naam na ho to ese function kb kaam ata hai kisbhi function ko jb variable me assign krte h to kise fucntion ko jb variable me hi assign krna tha to naam q diya ese hi situation me anonymous fun use kre h  
2. jb function kise variable me assign kr dete h to ese function expression khte hai*/
/*let abc =function(){
  console.log("Hello world")
}

abc();
*/

//ye kb use hota h jaise maan late mere pass ek situation h ki hello world kuch time ke baad aye to esek liye mare pass ek function h setTimeout(functionName,3000); two value late h 1 fucntion jo execute ho or 2 kitne time ke baad ho
/*--this is normal function 
function show(){
  console.log("Hello World");
}

setTimeout(show,3000);
*/

setTimeout(function (){ //anonymous function hm tb bnae 1. jb hm ek hi baar use/execute krna ho (mean baar baar call na krana ho ) 2. kise function ke parameter me pass krna ho
  console.log("Hello World");
}, 3000);