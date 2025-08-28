/*function add(a,b){
  console.log(a+b);

}

add(3,5); */

//ab hme print nhi krana h add kr ke ak variable me rkhna h to use liye hm let c= add() ko call krenge
/*function add(a,b){
                  //ya phir let d= a+b;
  return a+b;     //return d (return 0,variavle,expression bhi de skte hai)  ager return nhi date h to undefined answer deta hia
}
let c = add(4,5);
console.log(c); //9
*/

//----return as array-------------
/*function add(){
  let d = [1,2,3,4];
  return d;
}
let c= add();
console.log(c);
*/

//------------write return multipe time but run at a time one return like-----
function compare(a,b){
  if(a > b){
    return 1;
  }else if(b > a){
    return -1;
  }else{
    return 0;
  }
}

let c = compare(2,6);
console.log(c);