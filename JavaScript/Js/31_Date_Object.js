//Date Object
// let x =  "2025-01-250"; //this is date

/*let x = new Date();
console.log(x); //2025-07-27T05:33:47.051Z
*/
/*current date nhi lena ho to */
// let x = new Date(2018,11,13,10,33,56,7) //year,month,day,hr,min,sec,mili-sec (para meter hata bhi skte h )
// let x = new Date(2025,0,6);
// console.log(x);

/* value ko as a string bhi pass kr skte h*/
// let x = new Date("October 13,2028 11:12:33");
// console.log(x);

// -----now learn method-----
/*-----check mili second ----*/
// let x = new Date("October 13,2028 11:12:33");
// console.log(x.getTime());  //1855028553000

//---- find year---
// let x = new Date("October 13,2028 11:12:33");
// console.log(x.getFullYear()); //2028

//------find month-----
// let x = new Date("October 13,2028 11:12:33");
// console.log(x.getMonth()); //9

//------find date---
// let x = new Date("October 13,2028 11:12:33");
// console.log(x.getDate()); //13

//----find hr -------------
// let x = new Date("October 13,2028 11:12:33");
// console.log(x.getHours ()); //11

//------find min---
// let x = new Date("October 13,2028 11:12:33");
// console.log(x.getMinutes()); //12

//-----find sec---------
// let x = new Date("October 13,2028 11:12:33");
// console.log(x.getSeconds()); //33

//----find day-----
// let x = new Date("October 13,2028 11:12:33");
// console.log(x.getDay()); //6- mins friday


//----------now we set the value then------
// let x = new Date("October 13,2028 11:12:33");
// x.setFullYear(2020);
// console.log(x); //2020-10-13T05:42:33.000Z
//now we change months,day,hr,min,sec .....in the same way

// ---------ab hm chachte h ki current cate me 50 din add kr diya jye like
// let x = new Date("October 13,2028 11:12:33");
// x.setDate(x.getDate()+50);
// console.log(x); //2028-12-02T05:42:33.000Z

//    hm chachte h ki x ka date change no ho or new date y me store ho to 
//  let x = new Date("October 13,2028 11:12:33");
// let y= new Date("October 13,2028 11:12:33");
//  y.setDate(x.getDate()+50);
//  console.log(x);  //2028-10-13T05:42:33.000Z
//  console.log(y);  //2028-12-02T05:42:33.000Z

// ----------------date compare-------
  let x = new Date("October 13,2028 11:12:33");
let y = new Date();
if(y > x){
  console.log("x is past date");
}else if(x > y){
  console.log(" x is future date");
}else{
  console.log("x is same date");
} 