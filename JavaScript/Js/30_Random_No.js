//Generate Random number useMath.random()

// let x = Math.random(); // it generate 0 to 1 ke bitch ka no
// console.log(x);

/* i want to generat a no beteween 0 to 9 */
//let x = Math.floor(Math.random() * 10); // 10 se multiple esliye kiye ki 0 se 9 ke bitch ka value de or point ko hatane ke liye Math.floor()
// console.log(x);

/* no i want 15 to 20 ke bitch ka no*/

// let y = Math.floor( Math.random() * (25 - 15)) + 15; //esme hmko 15 se 24 tk ka hi value ayega min value count hota h bt max nhi 
// console.log(y);

function getRandom(min, max){
  let x = Math.floor(Math.random() * (max - min + 1)) + min;
  return x;
}

console.log(10,20) //ger + 1 nhi date h to wo 10 se 19 tk ke bitch ka hi value print krta esliye 