// Assignment Code
var generateBtn = document.querySelector("#generate");

function validLgth() {
  var input = parseInt(prompt("How long would you like your password to be? \n(Must be between 8 and 128 characters)"));

  if (isNaN(input)) {
    alert('Invalid character!');
    return validLgth();
  } else {
    if (input < 8 || input > 128) {
      alert('Invalid length!');
      return validLgth();
    } else {
      return input;
    }
  }
}

function generatePassword() {
  var lgth = validLgth();
  var lowLet = confirm("Include lowercase letters?");
  var upLet = confirm("Include uppercase letters?");
  var nums = confirm("Include numeric characters?");
  var spec = confirm("Include special characters?");

  // Strings containing different character types
  var lowStr = "abcdefghijklmnopqrstuvwxyz";
  var upStr = lowStr.toUpperCase();
  var numStr = '0123456789';
  var specStr = "!@#$%^&*()[]{}`~-_/\\?<>=+,.'|;: ";

  // Logic to determine which characters should be randomly chosen
  var usedChars = '';

  if (lowLet) {
    usedChars = usedChars.concat(lowStr);
  }
  if (upLet) {
    usedChars = usedChars.concat(upStr);
  }
  if (nums) {
    usedChars = usedChars.concat(numStr);
  }
  if (spec) {
    usedChars = usedChars.concat(specStr);
  }
  if (usedChars.length === 0) {
    alert('No characters selected! Please try again.');
    return "";
  }

  // Randomly chooses an index of a given array
  function randomChar (array) {
    var randIdx = Math.floor(Math.random() * array.length);
    return array[randIdx];
  }

  // Invokes randomChar for number of times equal to input length
  var password = "";

  for (var i = 0; i < lgth; i++) {
    password += randomChar(usedChars);
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);