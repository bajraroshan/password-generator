// Assignment Code
var generateBtn = document.querySelector("#generate");

var char = [' ', '!', '”', '#', '$', '%', '&', '’', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~' ];
var lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var confirmLowercase, confirmUppercase, confirmNumeric, confirmSpecialchar;

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword(){
    var userChoice = window.prompt("Please enter the length of characters.");
    console.log(userChoice);

    if(8 > userChoice || userChoice > 128){
      window.alert( "Password should be atleast 8 characters and no more than 128 characters");
      return;
    }

    var confirmLowercase = window.confirm('Do you want to include lowercase?');
    console.log(confirmLowercase);

    var confirmUppercase = window.confirm('Do you want to include uppercase?');
    console.log(confirmUppercase);

    var confirmNumeric = window.confirm('Do you want to include Number?');
    console.log(confirmNumeric);

    var confirmSpecialchar = window.confirm('Do you want to include special characters?');
    console.log(confirmSpecialchar);

    if(!(confirmLowercase || confirmUppercase || confirmNumeric || confirmSpecialchar)){
      window.alert( "Atleast one character type should be selected.");
      return;
    }

    var ppchar = [];
    console.log(ppchar);

    if(confirmLowercase){
      ppchar = ppchar.concat(upperAlphabet);
      console.log(ppchar);
    }

    if(confirmUppercase){
      ppchar = ppchar.concat(upperAlphabet);
      console.log(ppchar);
    }

    if(confirmNumeric){
      ppchar = ppchar.concat(number);
      console.log(ppchar);
    }

    if(confirmSpecialchar){
      ppchar = ppchar.concat(char);
      console.log(ppchar);
    }

    var passwordCharacters = [];

    for (var i = 0; i < userChoice; i++) {
      var characterCode = ppchar[Math.floor(Math.random() * ppchar.length)];
      console.log(characterCode);
      passwordCharacters += characterCode + "";
    }
    
    console.log(passwordCharacters);
    return passwordCharacters;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
