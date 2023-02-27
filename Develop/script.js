// RANDOM PASSWORD GENERATOR

// Gets reference to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    console.log("Password Generator Has Started!");

    var passwordLength = window.prompt("Enter Password Length - Min 8 Characters, Max 128 Characters "); // Prompts user to get the desired length of password

    if (!passwordLength) {
        window.alert("Please Enter Password Length to Begin");
        return ("Please Try Again");

    } else if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Please Enter Password Length >= 8 or <= 128 to Begin");
        return ("Please Try Again");
    } else {
        var passwordLowercase = window.confirm("Click OK to confirm including lowercase characters"); // LOWERCASE
        var passwordUppercase = window.confirm("Click OK to confirm including uppercase characters"); // UPPERCASE
        var passwordNumeric = window.confirm("Click OK to confirm including numueric characters"); // NUMERIC
        var passwordSpecial = window.confirm("Click OK to confirm including special characters"); // SPECIAL CHARACTERS

        var passcode = '';
        if (passwordLowercase == true) {
            passcode += 'a';
        }
        if (passwordUppercase == true) {
            passcode += 'A';
        }
        if (passwordNumeric == true) {
            passcode += '#';
        }
        if (passwordSpecial == true) {
            passcode += '!';
        }
        else {
            window.alert ("Please Select at least 1 Category to Begin");
            return ("Please Try Again");
        }

        var newCode = randomString(passwordLength, passcode); // Calls the function randomString
    }
    return (newCode);
}

function randomString(length, chars) { // Randomizes the string for Lowercase, Uppercase, Numeric and Special Characters
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) {
        result += mask[Math.floor(Math.random() * mask.length)];
    }
    return result;
}

function writePassword() {
    var password = generatePassword(); // Calls the function generatePassword
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);