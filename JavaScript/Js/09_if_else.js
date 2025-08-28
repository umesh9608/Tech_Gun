// check no is +ve , -ve or zero
let num = 5;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else {
  console.log("Number is zero");
}

/*
let isLoggedin = 0; //if o show loogedOut if 1 show login
if(isLoggedin == 0){
  document.write('Login');
}else{
  document.write('Logout');
}
*/
//---ternary op----
let option = isLoggedin == 1 ? "Logout" : "Login";
document.write(option); //Logout


//nales op ??
let user;
//let user ="vishwajeet";
alert(user ?? "guest User"); //ager phla value nhi h to undefiend show hota bt ab  ?? kaam h ki ager phla value nhi h to dusra value(gest user print krega)

// check pass or fail
let marks = 35;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
