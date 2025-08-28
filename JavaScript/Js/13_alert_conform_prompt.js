//  Shows a message to the user — just OK button.

alert("Welcome to my website!");


//Ask the user a yes/no (ok/cancel)
let isSure = confirm("Do you want to continue?");

if (isSure) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}

// prompt()
//Ask user to enter input(text input + ok/cancel)

let name = prompt("What is your name?");
console.log("Hello, " + name + "!");
