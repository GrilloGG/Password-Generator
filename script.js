// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add Arrays with all the characters
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
const numbers =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

//start the function
function generatePassword(){
  
  //prompt to ask the length of the password. Beetwen 8-128
  let passwordLength = prompt("Select the length of your password between 8-128");
 
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
    passwordLength = prompt("Password needs to be between 8 and 128");
  }
  
  //Ask a series of questions to check what user wants to include on the password. User will need to select at least one to continue
  let selectLowerCase = confirm("Do you want to include LOWER CASE caracters on your password?");
  let selectUpperCase = confirm("Do you want to include UPPER CASE caracters on your password?");
  let selectNumbers = confirm("Do you want to include NUMBERS on your password?");
  let selectSymbols = confirm("Do you want to include SYMBOLS on your password?");
  while (selectLowerCase !== true && selectUpperCase !== true && selectNumbers !== true && selectSymbols !== true){
    alert("You need to selec at least 1 option");
    selectLowerCase = confirm("Do you want to include LOWER CASE caracters on your password?");
    selectUpperCase = confirm("Do you want to include UPPER CASE caracters on your password?");
    selectNumbers = confirm("Do you want to include NUMBERS on your password?");
    selectSymbols = confirm("Do you want to include SYMBOLS on your password?");
  }

  //Add the characters to the new Array dependin on user inputs
  let include = [];
  if (selectLowerCase){
    include = include.concat(lowerCase)
  }
  if (selectUpperCase){
    include = include.concat(upperCase)
  }
  if (selectNumbers){
    include = include.concat(numbers)
  }
  if (selectSymbols){
    include = include.concat(symbols)
  }

  //Select the number of character randomly depending on the length that the user has selected
  let passwordArray = []
  for (let i = 0; i < passwordLength; i++){
    let characterSelection = include[Math.floor(Math.random() * include.length)];
    passwordArray.push(characterSelection);
    }
  let passwordString = passwordArray.join("");
return passwordString;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}











































