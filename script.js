// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array define for seperate variables
var char = ['!', '”', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~' ];
var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Defining Object to store generated password
var passwordCharacters = [];
var selectionCount = 0;
var confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecialchar;

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(){
    // Try Again Message
    var tyrAgainMessage = "PLEASE TRY AGAIN";
    
    // Ask user for their choice of length
    var userChoice = window.prompt("Please enter the length of characters.");
    // console.log(userChoice);
    
    // Checking if user hits cancel
    if (userChoice == null) {
      return tyrAgainMessage;
    }

    // Checking if the input is number or not
    if(isNaN(userChoice)){
      window.alert( "Please enter a valid Number");
      // console.log(userChoice);
      return tyrAgainMessage;
    }

    // Checking whether the lenght is less than 8 and more than 128
    if(8 > userChoice || userChoice > 128){
      window.alert( "Password should be atleast 8 characters and no more than 128 characters");
      return tyrAgainMessage;
    }

    // Confirming if user wants to use lowercase alphabet in the password.
    var confirmLowercase = window.confirm('Do you want to include lowercase?');
    // console.log(confirmLowercase);

    // Confirming if user wants to use uppercase alphabet in the password.
    var confirmUppercase = window.confirm('Do you want to include uppercase?');
    // console.log(confirmUppercase);

    // Confirming if user wants to use number in the password.
    var confirmNumeric = window.confirm('Do you want to include Number?');
    // console.log(confirmNumeric);

    // Confirming if user wants to use special characters in the password.
    var confirmSpecialchar = window.confirm('Do you want to include special characters?');
    // console.log(confirmSpecialchar);

    // Checking if any of the lowercase, uppercase, numeric or special character is selected.
    if(!(confirmLowercase || confirmUppercase || confirmNumeric || confirmSpecialchar)){
      window.alert( "Atleast one character type should be selected.");
      return;
    }

    // Defining Object to store the array according to user's choice
    var ppchar = [];
    console.log(ppchar);

    // Adding in array if user includes Lowercase Alphabet
    if(confirmLowercase){
      ppchar = ppchar.concat(lowerAlphabet);
      // console.log(ppchar);
      
      // Getting 1 random lowercase Alphabet
      var initialInput = lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)];
      // console.log(initialInput);

      // Inserting that random alphabet in passwordcharacter array
      passwordCharacters += initialInput + "";
      console.log(passwordCharacters);

      // Counting true condition
      selectionCount++;
    }

    // Adding in array if user includes Uppercase Alphabet
    if(confirmUppercase){
      ppchar = ppchar.concat(upperAlphabet);
      // console.log(ppchar);

      // Getting 1 random Uppercase Alphabet
      var initialInput = upperAlphabet[Math.floor(Math.random() * upperAlphabet.length)];
      console.log(initialInput);

      // Inserting that random alphabet in passwordcharacter array
      passwordCharacters += initialInput + "";
      // console.log(passwordCharacters);
      
      // Counting true condition
      selectionCount++;
    }

    // Adding in array if user includes Numbers
    if(confirmNumeric){
      ppchar = ppchar.concat(number);
      // console.log(ppchar);

      // Getting 1 random Number
      var initialInput = number[Math.floor(Math.random() * number.length)];
      // console.log(initialInput);
      
      // Inserting that random alphabet in passwordcharacter array
      passwordCharacters += initialInput + "";
      // console.log(passwordCharacters);
      
      // Counting true condition
      selectionCount++;
    }

    // Adding in array if user includes Special Characters
    if(confirmSpecialchar){
      ppchar = ppchar.concat(char);
      // console.log(ppchar);

      // Getting 1 random Character
      var initialInput = char[Math.floor(Math.random() * char.length)];
      // console.log(initialInput);
      
      // Inserting that random alphabet in passwordcharacter array
      passwordCharacters += initialInput + "";
      // console.log(passwordCharacters);
      
      // Counting true condition
      selectionCount++;
    }

    
    // console.log(selectionCount);

    // Loop to generate random character from combined array
    for (var i = 0; i < userChoice; i++) {
      var characterCode = ppchar[Math.floor(Math.random() * ppchar.length)];
      // console.log(characterCode);
      passwordCharacters += characterCode + "";
    }
    
    // Returning the newly generated Password
    // console.log(passwordCharacters);

    // Removing the n number of character from generated character
    passwordCharacters = passwordCharacters.slice(0, - + selectionCount);
    // console.log(passwordCharacters);

    // Shuffling the character
    var finalPassword = passwordCharacters.split('').sort(function(){return 0.5 - Math.random()}).join('');

    // console.log(finalPassword);
    return finalPassword;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
