/* object me gatter or setter kya hota h*/ 
//in normal

// var person = {
//   name:"Vishal",
//   age:23,
// }

// console.log(person.name);

/*ab hm chachte h ki name capital letter me print ho to  
console.log(person.name.toLocaleUpperCase); but hm chachte h ki obj ce bahar h kb koi bhi property ka value to
*/
// var person = {
//   name:"Vishal",
//   age:23,
//   getname: function(){
//     return this.name.toUpperCase();
//   }
// }

// console.log(person.getname());
/*hme ek esa funtion bnana h jo method(like getname())ke tra call no ho ke ek property (like gatename) ke tra call ho to ese me kaam ata h getter or setter ye tb kaam ata h jb orginal data to manipulate kre (change) kr ke bhejte to kaam ata h*/ 

// var person = {
//   name:"Vishal",
//   age:23,
//  get getname(){
//     return this.name.toUpperCase();
//   }
// }

// console.log(person.getname);

// ---------stetter------
// ek esa function jo kise bhi inter kre value capital me hi save ho to
var person = {
  name:"Vishal",
  age:23,
  // getname: function(){
  //   return this.name.toUpperCase();
  // },

  set setname(n){
    this.name = n.toUpperCase();
  }
}

person.setname = "ajit";

console.log(person);

// Gatter :-jb hme koi bhi property ka value get krna ho manuplate krke(change kr ke)
// setter :-jb hme koi bhi property ka value set(store) krna ho manuplate krke(change kr ke)
// 