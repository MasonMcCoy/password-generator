// Assignment Code
var generateBtn = document.querySelector("#generate");

function validLgth() {
  var input = parseInt(prompt('Length?'));

  if (isNaN(input)) {
    return validLgth();
  } else {
    if (input < 8 || input > 129) {
      return validLgth();
    } else {
      return input;
    }
  }
}

function generatePassword() {
  var lgth = validLgth();
  var lowLet = confirm('Lowercase letters?');
  var upLet = confirm('Uppercase letters?');
  var nums = confirm('Numeric characters?');
  var  spec = confirm('Special characters?');

  console.log(lgth);
  console.log(lowLet);
  console.log(upLet);
  console.log(nums);
  console.log(spec);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
