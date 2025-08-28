/*esa kya situation hoga jo hme arguments object  ki jarurat pdi :-ab hme pta hi nhi ka ki user arguments me kitna no pass krega to hm ese handle kete hia  (esme hota ye h ki hamare pass ek array ke jesa ek obj milta hia jo fun ke ander automatic mil jata hai to hme parameter ka ek arguments mil jata hai)*/
//arguments  :-hme ek array milta h jiska naam h arguments ye ek array h or es array me jitna bhi arguments pass hua hai na wo sb es array me aake store ho jata h automatic

/*function add(){
  // console.log(arguments);
  // console.log(arguments.length); 
  console.log(arguments[0]) //check kre rhe kon se index me kya value hai

}
// add(2,3); //2
// add(4,5,6);//3
add(1,2,3,4,5,6,7); //7 
*/

function add() {
  if (arguments.length == 0) {
    console.log("no arguments pass");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i];
    }
    console.log(sum);
  }
}

//       hm function ko ek variable me store kr skte h like

let addition = add;
addition(5,2) //ab ye same function add se bhi call kr rha h or adddition name se bhi kr rha hai esi ko khete h function ko variable me store krna
add(5,7) //take multipe arguments