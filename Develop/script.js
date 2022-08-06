// Assignment Code
function generatePassword() {
  var lowercase_characters = "abcdefghijklmnopqrstuvwxyz"
  var uppercase_characters = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
  var numbers = "1234567890"
  var special_characters = "!@#$%^&*()-*/?><"
  var choosen_characters = ""
  var generatedpassword = ""

  var passwordlength=window.prompt("pick a password length between 8 and 128")
  var confirmLower=window.confirm("should your password has lower case")
  var confirmupper=window.confirm("should your password has upper case")
  var confirmnumber=window.confirm("should your password has numbers")
  var confirmspecial_characters=window.confirm("should your password has special chararcters")

  console.log(passwordlength)
  console.log(confirmLower)
  console.log(confirmupper)
  console.log(confirmnumber)
  console.log(confirmspecial_characters)

if(confirmLower==true){
  choosen_characters=lowercase_characters+choosen_characters
}
if(confirmupper==true){
  choosen_characters=uppercase_characters+choosen_characters
}
if(confirmnumber==true){
  choosen_characters=numbers+choosen_characters
}
if(confirmspecial_characters==true){
  choosen_characters=special_characters+choosen_characters
}

for (let i = 0; i < passwordlength; i++) {
  generatedpassword=generatedpassword+choosen_characters.charAt(Math.floor(Math.random()*choosen_characters.length))
}
return generatedpassword



}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
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
