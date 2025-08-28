// 

function Student(first, last, age, clas){  
this.firstName = first;
this.lastName = last;
this.age = age;
this.class = clas;
}
/*prototype:- wo concept jike through ap method or property ko constructor fun ke bahar add kr skte h*/

// hme kuch baad me add krne ki kb pd skta h 
Student.prototype.nationality = "Indian";

// ager hm  name ko es sath print kre to method bhi bna skte h like
Student.prototype.name = function(){  
  return this.firstName + " " + this.lastName;
}

var student1 = new Student("vimal","kumar", 25,5); 
var student2 = new Student("vhim","kumar", 20,9); 
// console.log(student2); //it show on console
// console.log(student2.nationality);
console.log(student1.name());