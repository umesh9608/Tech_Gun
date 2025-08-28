/*Object */ 

let person= {
  firstName:"Vikash",
  lastName:"Sahu",
  age:24,
}
//Object ke property ko 2 type se access kr skte h 1. using .notation 2. using array notation
console.log(person.firstName); 
console.log(person['lastName']);
console.log(person);

//if modify value then use
person.firstName = "Vikram";
console.log(person.firstName);

//add new property of the person like
person.mobileNo =12345678901;
console.log(person.mobileNo);

// delete property
delete person.lastName;
console.log(person);

//check krna h ki koi property h ki nhi like i want to check height ther are two type 
//type 1
console.log(person.height) //undefined 
//type 2  using (in op it give true and false value)
console.log('height' in person); //false

// iterateing over properties of an object
console.log("--------------------------------------------------------------------");

for(let key in  person){
  // console.log(key); //give name/
  console.log(key + " : " + person[key]);
}
