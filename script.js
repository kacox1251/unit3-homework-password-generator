//the generate button should open the promts when clicked

// create variables for cap letters, lowercase letters, numbers, special
var generateBtn = document.querySelector(".generate");
var copyBtn = document.querySelector(".copy");
var pasEl = document.querySelector(".password-container");

generateBtn.addEventListener("click", function(event) {
    //character length prompt
    var pasLength = prompt("How long would you like your password to be? (between 8 and 128 characters)");
    if (pasLength < 8 || pasLength > 128 || pasLength === null) {
        alert("I'm sorry, length must be between 8 and 128 characters.");
        return;
    }
    else {
        console.log("Yay! Time to choose characters!")
    }
        //character type prompts
    var cap = confirm("Would you like upper case letters?");
    var low = confirm("Would you like lower case letters?");
    var special = confirm("Would you like special characters? (!#$%&()*+,-./:;<=>?@[\]^_`{|}~)");
    var num = confirm("Would you like numbers?");
    var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    var specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
    var numChar = 1234567890;

    var capital = cap[true] + capLetters;
    var lowerCase = low[true] + lowerLetters;
    var specChar = special[true] + specialChar;
    var numbers = num[true] + numChar;
    
    if (cap === false && low === false && special === false && num === false) {
        alert("I'm sorry, you have to choose at least one character, please try again.");
        }
    else {
        var characters = capital + lowerCase + specChar + numbers;
        pasEl.textContent = password(pasLength.value, characters);

        function password(l){
            var pwd = '';
            for(var i = 0; i<l; i++){
                pwd = characters.charAt(Math.floor(Math.random() * characters.length));
            }
            console.log(pwd);
        }
    }
});