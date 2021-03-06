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
  var lowLetterList = 'qwertyuiopasdfghjklzxcvbnm'; // Used latter for concatenating without making the if statements messy.
  var upLetterList = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  var specLetterList = '!@#$%^&*()_+!@#$%^&*()_+'; // I decided to double this string length to give these characters more of a chance to show up in the password.
  password = '';

  var passwordLength = prompt('Choose password length between 8 and 128 characters (ex. "15").'); //Prompt for getting a length value and a following while statement to return the prompt if the value is out of bounds continuously.
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt('The password must be between 8 and 128 characters (ex. "15"). Choose password length.');
  }
  
  var lowerCase = prompt('Would you like to include lowercase letters? Y/N'); // Create a variable and prompt for including lowercase charcters.
  var upperCase = prompt('Would you like to include uppercase letters? Y/N'); // Create a variable and prompt for including uppercase charcters.
  var specialCase = prompt('Would you like to include special characters? Y/N'); // Create a variable and prompt for including special charcters.

  if (lowerCase.toLowerCase() == 'y'){ // If lowercase was selected, seedString is concatenated with lowercase letters.
    seedString += lowLetterList;
    password += lowLetterList.charAt(Math.floor(Math.random() * 1)); // Adds a single random character from the lowLetterList to ensure that it ends up in the final password.
    passwordLength = passwordLength -1; // Since a single letter is being added the passwordLength must be shortened by the same amount. Otherwise the password will be a character longer than expected.
  }
  
  if (upperCase.toLowerCase() == 'y'){ // If lowercase was selected, seedString is concatinated with uppercase letters.
    seedString += upLetterList;
    password += upLetterList.charAt(Math.floor(Math.random() * 1)); // Adds a single random letter from the upLetterList
    passwordLength = passwordLength -1;
  }

  if (specialCase.toLowerCase() == 'y'){ // If lowercase was selected, seedString is concatinated with special characters.
    seedString += specLetterList;
    password += specLetterList.charAt(Math.floor(Math.random() * 1)); // Adds a single random letter from the specLetterList
    passwordLength = passwordLength -1;
  }

  if (seedString === ''){ // Alert the user if the seedString is empty and ask them to start over.
    alert('At least one case selection must be made (lower, upper, and/or special characters). Please start again.');
  }

  var seedStringLength = seedString.length; // Discovered that I needed the math function below to take in the whole length of the seedString after it is concatenated. It is much closer to random now.
  for (i = 0; i < passwordLength; i++){ // Finally, use a random character finder to create a new string (password) using the seedString with a number of characters equal to the passwordLength.
    console.log(seedString);
    password += seedString.charAt(Math.floor(Math.random() * seedStringLength));
  }

  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
