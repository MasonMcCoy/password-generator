// Assignment Code
var generateBtn = document.querySelector("#generate");

function validLgth() {
  var input = parseInt(prompt("How long would you like your password to be? \n(Must be between 8 and 128 characters)"));

  if (isNaN(input)) {
    alert('Invalid character!');
    return validLgth();
  } else {
    if (input < 8 || input > 129) {
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
  var  spec = confirm("Include special characters?");

  // console.log(lgth);
  console.log(lowLet);
  console.log(upLet);
  console.log(nums);
  console.log(spec);

  // Arrays of different character types
  var lowChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Would I be able to use the above array and .toUppercase()?
  var upChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", 
  "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // How to include a backslash and double quotation marks?
  var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "`", 
  "~", "-", "_", "/", "?", "<", ">", "=", "+", ",", ".", "'", ' ', "|", ";", ":"];

  // Logic to determine which character arrays to use
  if (!lowLet && !upLet && !nums && !spec) {
    console.log('No characters to use!');
  } else if (lowLet && upLet && nums && spec) {
    console.log('Use all characters!');
  } else if (lowLet && upLet && nums) {
    console.log('Use lowercase, uppercase, and number characters!');
  } else if (lowLet && upLet) {
    console.log('Use lowercase and uppercase characters!');
  } else if (lowLet) {
    console.log('Use lowercase characters only!');
  } else if (upLet) {
    console.log('Use uppercase characters only!');
  } else if (nums) {
    console.log('Use number characters only!');
  } else if (spec) {
    console.log('Use special characters only!');
  }
  
  // Randomly chooses an index of a given array
  function randomChar (array) {
    var randIdx = Math.floor(Math.random() * array.length);
    return array[randIdx];
  }

  // Invokes randomChar for number of times equal to imput length
  var password = "";

  for (var i = 0; i < lgth; i++) {
    password += randomChar(lowChar);
    // console.log(password);
  }

  // for (var i = 0; i < 10; i++) {
  //   var randChar = Math.floor(Math.random(lowChar.length));
  //   password.concat(lowChar[randChar]);
  //   console.log(password);
  // }

  //  console.log(lowChar);
  //  console.log(upChar);
  //  console.log(numChars);
  //  console.log(specChar);

  // for (var i = 0; i < 10; i++) {
  //   console.log(i);
  // }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
