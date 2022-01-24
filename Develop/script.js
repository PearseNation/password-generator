// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var seedString = '';
  
  var passwordLength = prompt('Choose password length between 8 and 128 characters (ex. "15").'); console.log(passwordLength); //Prompt for getting a length value and a following while statement to return the prompt if the value is out of bounds continuously.
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt('The password must be between 8 and 128 characters (ex. "15"). Choose password length.'); console.log(passwordLength);
  }
  
  var lowerCase = prompt('Would you like to include lowercase letters? Y/N'); // Prompt for including lowercase charcters into the seedString.
  if (lowerCase.toLowerCase() == 'y'){
    seedString = 'qwertyuiopasdfghjklzxcvbnm';
  } console.log(lowerCase);
  
  var upperCase = prompt('Would you like to include uppercase letters? Y/N'); console.log(upperCase); // Prompt just like for lowercase, but the seedString is concatinated if the boolean is true.
  if (lowerCase.toLowerCase() == 'y'){
    seedString = seedString + seedString.toUpperCase();
  }

  var specialCase = prompt('Would you like to include special characters? Y/N'); console.log(upperCase); // Prompt for special characters set up just like before.
  if (lowerCase.toLowerCase() == 'y'){
    seedString = seedString + 'q!@#$%^&*()_+';
  }

  if (seedString === ''){ // Alert the user if the seedString is empty and ask them to start over.
    alert('At least one case selection must be made (lower, upper, and/or special characters). Please start again.');
  }

  for (i = 0; i < passwordLength; i++){ // Finally, use a random character finder to create a new string (password) using the seedString with a number of characters equal to the passwordLength.
    password += seedString.charAt(Math.floor(Math.random() * passwordLength));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
