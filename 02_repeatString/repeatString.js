const repeatString = function(string, num) {
    const myWord = string;
    let myString = '';
    
    if (num < 0) {
        return "ERROR";
    }
    for (i = 1; i <= num; i++) {
        myString += string;
    }
    return myString;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
