// Obj con ki jarurat q pdi
// var student1 = {
//   firstName : "vimal",
//   latName : "kumar",
//   age:24,
//   class:5
// }
//same ager  10 student ho to 10 obj bnana pdta to eske liye hmlog class bnate h ye js me bhi h bt es6 me aye to usek phle obj constructor use krte the

function Student(first, last, age, clas){  //(obj cons fun ka first letter capital give always)
this.firstName = first;
this.lastName = last;
this.age = age;
this.class = clas;
}

var student1 = new Student("vimal","kumar", 25,5); //first student obj
var student2 = new Student("vhim","kumar", 20,9); //obj 2
console.log(student1);

// ager hm chachte hi ki student1 me ek or property add kre to
student1.nationality = "indian";
// console.log(student1);

//  same hm method bhi add kr skte h like
student1.name = function(){
  return this.firstName + " " + this.lastName;
}
console.log(student1.name());
