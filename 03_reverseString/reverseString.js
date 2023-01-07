const reverseString = function(string) {
    let myString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        myString += string[i];
    }

    return myString;
};

reverseString('hello')
// Do not edit below this line
module.exports = reverseString;
