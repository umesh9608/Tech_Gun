//this keyword use in object
let person = {
  firstName: 'sohan',
  lastName: 'das',
  sayHello() {
    //console.log("Hello ! i am " + person.firstName +" and i have a "+  car.brand + " car") //ek obj ke ander kise dusere obj ke properties ko access kr skte h

    // ager same obj ke andre uska property access krna h to uska naaam na dekr this keyword ka use krte h (person.firstNme  // this.firstName)
    console.log("Hello ! i am " + this.firstName + " and i have a " + car.brand + " car")

  }
};

let car = {
  brand: 'tata',
  model: 'safari'
}

person.sayHello();