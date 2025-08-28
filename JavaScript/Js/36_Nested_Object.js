// nested obj ka matlab obj ke ander obj
var user = {  //label 1
  id: 101,
  email: "abc@gmail.com",
  personalInfo: {  //label 2 obj
    name: "sunil",
    address: {  //label 3 obj
      street: "kokar",
      city: "Ranchi",
      country: "India"
    }
  }
};

// console.log(user);
// console.log(user.personalInfo);
// console.log(user.personalInfo.address);
 console.log(user.personalInfo.address.country);
