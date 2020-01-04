//the generate button should open the promts when clicked

// create variables for cap letters, lowercase letters, numbers, special
var generateBtn = document.querySelector(".generate");
var copyBtn = document.querySelector(".copy");
var pasEl = document.querySelector(".password-container");

var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numChar = "1234567890";

function generateSelectedCharacterOptions(cap, low, special, num) {
    var characterOptions = [];
        
    if(cap) {
        characterOptions.push(capLetters);
    }
    if(low) {
        characterOptions.push(lowerLetters);
    }
    if(special) {
        characterOptions.push(specialChar);
    }
    if(num) {
        characterOptions.push(numChar);
    }
}

function randVal(length) {

}

function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position="fixed";  //avoid scrolling to bottom
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
}

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
    
    if (cap === false && low === false && special === false && num === false) {
        alert("I'm sorry, you have to choose at least one character, please try again.");
    }
    else {
        //shape "" ""
        characterOpts = generateSelectedCharacterOptions(cap, low, special, num);
        var password = ""
        //loop and randomly choose characters based on users specifications for paslength 
        for (var i = 0; i <= pasLength + 1; i++){
            // var randOptions =  
            // var randChar = 
            password +=characterOpts[Math.floor(Math.random() * characterOpts.length)]
            //randomly choose a type of character
            //we need to randomly choose a character from that type
            //we apply that character to current password
        }
        //supply password to user
        pasEl.textContent = password;
    }
});

copyBtn.addEventListener('click', function(event) {
    copyTextToClipboard(pasEl.textContent);
});