//comparision op
let a = 5;
let b = "5";
let c = 10;

console.log(a == b);    // true (values same)
console.log(a === b);   // false (types different)
console.log(a != b);    // false
console.log(a !== b);   // true
console.log(c > a);     // true
console.log(c < a);     // false
console.log(c >= 10);   // true
console.log(a <= 5);    // true

let age = 14;
let hasvoterCard = 'yes';

// // you can vote or not
// if (age >= 14 && hasvoterCard == 'yes') {
//   alert("You can vote");
// } else if (age >= 14 && hasvoterCard != 'yes') {
//   alert("get your voter id card !")
// } else {
//   alert("You can't vote");
// }

// nested if else
  if(age>= 14){
    if(hasvoterCard == 'yes'){
      alert("you can vote !")
    }else{
      alert("Get your voter id card !");
    }
  }else{
    alert("You can't vote !");
  }


// logical op dono contition true then true 
/* && and
(5 < 10 && 6 >1  -> true
(5 >10 && 6>1 -> false

|| or op ek bhi true to true

(5 == 5 || 6==5) -> true
(7 == 5 || 6 == 5) -> false

! not op (ye ulta kr deta hai desigion ko)
*/
let x = 10;
let y = 5;

console.log(x > 5 && y < 10); // true (both true)
console.log(x > 15 || y < 10); // true (one is true)
console.log(!(x > y));         // false (x > y is true, !true = false)
