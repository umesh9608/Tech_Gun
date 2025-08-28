/*let str="coder"; //single quote or double quote valid for string
let greet = `Hi ${str}`;
console.log(greet)
*/
//-----------scape special character
//let str = "umesh kumar"; //use \,\n, \t, \\(first \ scape and second \ show character), \"
// console.log(str)

// -----to check string length--------
// console.log(str.length)

//---pring(find) special character in string
// console.log(str[3]);


//----two string add---
//let str2= " verma";
// console.log(str + " " + str2);

//----compare string---
// if("umesh" ==str){
//   console.log("Equal");
// }else{
//   console.log("Not equal")
// }

//-----add two string using concat function
// let str3=str.concat(str2);
// console.log(str3)

//-----sub string nikalna ------
/*let p="this is a js tutorial";
let subString = p.substring(2,9); //it take to index (first starting index and second ending index)
console.log(subString); */

//---------to find position of any character (use  indexOf())--
// let str = "This is javascript tutorial. It is a good tutorial";

//let position = str.indexOf('good'); //hm chcek kr rhe hai ki good character kha se start hua hai uska index
//let position = str.indexOf('is',6); //hm chha rhe hia is  ke baad wala is ka index print kre
//hm 2 position esliye deta hai ki uske baad wale character ko find kro

//---find by last index-------
// let position = str.lastIndexOf('is'); //32
// console.log(position); 

//----removeing white space-------
 /* let str = "This is javascript tutorial. It is a good tutorial";

let trimedStr= str.trim(); //check in console  //not terminal //.trimStart() //.trimEnd()
console.log(str);
console.log(trimedStr); */

//-----------change Uppercase and LowerCase----
/*let str = "This is javascript tutorial. It is a good tutorial";

let toUpper = str.toLocaleUpperCase();//toLowerCase();
console.log(toUpper); */

//----------replace any word----
/* let str = "This is javascript tutorial. It is a good tutorial";
 let replace =str.replace('good','the best') //first value kya replace krna hai and second value kya dalna hia
 console.log(replace); */

 //----include (koi particular chij hai ya nhi)----
/* let str = "This is javascript tutorial. It is a good tutorial";
let trimedStr=str.includes('html'); //check kre reh hai ki str me html hai ya nhi or true ya false me value de
console.log(trimedStr); */

