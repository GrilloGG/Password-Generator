/*
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

alert(generateBtn.addEventListener);
*/


const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
const numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

const randomLowerCase = lowerCase[Math.floor(Math.random() * lowerCase.length)]
const randomUpperCase = upperCase[Math.floor(Math.random() * upperCase.length)]
const randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]


let passwordLength = prompt("Select the length of your password between 8-128");

while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) passwordLength = prompt("Password needs to be between 8 and 128 caracters");
console.log(passwordLength);

let selectLowerCase = confirm("Do you want to include LOWER CASE caracters on your password?");
let selectUpperCase = confirm("Do you want to include UPPER CASE caracters on your password?");
let selectNumbers = confirm("Do you want to include NUMBERS on your password?");
let selectSymbols = confirm("Do you want to include SYMBOLS on your password?");

while (selectLowerCase !== true && selectUpperCase !== true && selectNumbers !== true && selectSymbols !== true){
  alert("You need to selec at least 1 variable");
  selectLowerCase = confirm("Do you want to include LOWER CASE caracters on your password?");
  selectUpperCase = confirm("Do you want to include UPPER CASE caracters on your password?");
  selectNumbers = confirm("Do you want to include NUMBERS on your password?");
  selectSymbols = confirm("Do you want to include SYMBOLS on your password?");
}

console.log(selectLowerCase)
console.log(selectUpperCase)
console.log(selectNumbers)
console.log(selectSymbols)




//if (selecLowerCase !== true && selecUpperCase !== true && selecNumbers !== true && selecSymbols !== true){
//  alert("Please select at least one\nPlease refresh the page")
//}
  



function generatePassword(){

}


















































