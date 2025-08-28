//----------operation of array----------
let book = ["Math", "Phy", "BIO", "CMS"];
// console.log(book.length); //4
//add new value on array last
book.push("Hindi");
//add new value on array first
book.unshift("Che");
//element remove on last value orarray
book.pop();
//element remove on first value of array
book.shift();

//element remove on middle 
book.splice(1, 2) //first value show index and second value show how many value we want to remove on this array
//remove all element or the array
book = [];  // type 1
book.length = 0; // type 2
//find specific element position usin indexOf()
let position = book.indexOf("Bio");
/* indesOf() nad string same kaam krta hai to string jo hota hai wo actual me character of array hota hai*/

/*
let book2 = "Math";
console.log(Array.isArray(book2)) //flase because this is normal variable
console.log(Array.isArray(book)) //true because this is array variavle
console.log(book);
*/

// ---split()---------------ab hm chache hia ek ek word array bn jye(todna)
/* let text = "This is a random text";

let wordArray = text.split(' ');  //one by one word
let wordArray = text.split(''); //one by one character
let wordArray = text.split('s'); //jha jha s hai wha wha se tod dega 

*/
//----------join()--------

/*let booka = ["Math", "Phy", "BIO", "CMS"];
let wordArray = booka.join('-'); 
console.log(wordArray); 

let book2 = ["Hind", "Eng", "Compter"];
let book3 = ["coding", "html", "css"];

let newBook = booka.concat(book2);  //join two book
let newBook = book.concat(book2,book3)  //join multiple book
 console.log(newBook);
*/


//----------------Multi-dementional array------array ka array---------
/*let bookWithPages = [
    ["Math","300"],
    ["Physics","500"],
    ["Bio","400"],
    ["Computer","590"]
];

let fetch = bookWithPages[1][1] //access physics

console.log(fetch)
*/

//---------------useing fol loop----
/*let books = ["Math", "Phy", "BIO", "CMS"];
let bookLength =books.length;
for(i=0; i < bookLength; i++){
    console.log(`Elements ${i} is ${books[i]} \n`);
}  */


    //----forEach loop in ayyay---------
let books = ["Math", "Phy", "BIO", "CMS"];
books.forEach(myfu);

function myfu(value){
  console.log(value);
}

/*  diff bt for loop and for each loop me hme length ka jarurt nhi pda or hme loop chalana nhi pda */