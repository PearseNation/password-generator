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
  password = '';

  var passwordLength = prompt('Choose password length between 8 and 128 characters (ex. "15").'); //Prompt for getting a length value and a following while statement to return the prompt if the value is out of bounds continuously.
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt('The password must be between 8 and 128 characters (ex. "15"). Choose password length.');
  }
  
  var lowerCase = prompt('Would you like to include lowercase letters? Y/N'); // Create a variable and prompt for including lowercase charcters.
  var upperCase = prompt('Would you like to include uppercase letters? Y/N'); // Create a variable and prompt for including uppercase charcters.
  var specialCase = prompt('Would you like to include special characters? Y/N'); // Create a variable and prompt for including special charcters.

  if (lowerCase.toLowerCase() == 'y'){ // If lowercase was selected, seedString is concatinated with lowercase letters.
    seedString = seedString + 'qwertyuiopasdfghjklzxcvbnm';
  }
  
  if (upperCase.toLowerCase() == 'y'){ // If lowercase was selected, seedString is concatinated with uppercase letters.
    seedString = seedString + 'QWERTYUIOPASDFGHJKLZXCVBNM';
  }

  if (specialCase.toLowerCase() == 'y'){ // If lowercase was selected, seedString is concatinated with special characters.
    seedString = seedString + '!@#$%^&*()_+';
  }

  if (seedString === ''){ // Alert the user if the seedString is empty and ask them to start over.
    alert('At least one case selection must be made (lower, upper, and/or special characters). Please start again.');
  }

  for (i = 0; i < passwordLength; i++){ // Finally, use a random character finder to create a new string (password) using the seedString with a number of characters equal to the passwordLength. I'm still working on a way for this to ensure it has all the desired types even if the password is too short.
    password += seedString.charAt(Math.floor(Math.random() * passwordLength));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
