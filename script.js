 //global variables
var generateBtn = document.querySelector(".generate");
var copyBtn = document.querySelector(".copy");
var pasEl = document.querySelector(".password-container");
var capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
var numChar = "1234567890";

 //functions
function generateSelectedCharacterOptions(cap, low, special, num) {
  var characterOptions = [];
  if (cap) {
    characterOptions.push(capLetters);
  }
  if (low) {
    characterOptions.push(lowerLetters);
  }
  if (special) {
    characterOptions.push(specialChar);
  }
  if (num) {
    characterOptions.push(numChar);
  }
  return characterOptions;
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Fallback: Copying text command was " + msg);
  } catch (err) {
    console.error("Fallback: Oops, unable to copy", err);
  }
  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function() {
      console.log("Async: Copying to clipboard was successful!");
    },
    function(err) {
      console.error("Async: Could not copy text: ", err);
    }
  );
}

 //events
generateBtn.addEventListener("click", function(event) {
  var pasLength = prompt(
    "How long would you like your password to be? (between 8 and 128 characters)"
  );
  if (pasLength < 8 || pasLength > 128 || pasLength === null) {
    alert("I'm sorry, length must be between 8 and 128 characters.");
    return;
  } else {
    console.log("Yay! Time to choose characters!");
  }
  
  var cap = confirm("Would you like upper case letters?");
  var low = confirm("Would you like lower case letters?");
  var special = confirm("Would you like special characters? (!#$%&()*+,-./:;<=>?@[]^_`{|}~)");
  var num = confirm("Would you like numbers?");

  if (cap === false && low === false && special === false && num === false) {
    alert(
      "I'm sorry, you have to choose at least one character, please try again."
    );
  } else {
    var characterOpts = generateSelectedCharacterOptions(
      cap,
      low,
      special,
      num
    );
    var password = "";
    
    for (var i = 0; i < pasLength; i++) {
      var randomCharTypeIndex = Math.floor(
        Math.random() * characterOpts.length
      );
      var randomCharIndex = Math.floor(
        Math.random() * characterOpts[randomCharTypeIndex].length
      );
      password += characterOpts[randomCharTypeIndex][randomCharIndex];
    }
    pasEl.textContent = password;
  }
});

copyBtn.addEventListener("click", function(event) {
  copyTextToClipboard(pasEl.textContent);
});