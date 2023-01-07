const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') { return "ERROR"; }
    if (num1 < 0 || num2 < 0){ return "ERROR"; }

    let sum = 0;
    let smallNum = 0;
    let largeNum = 0;

    if (num1 < num2){
        smallNum = num1;
        largeNum = num2;
    } else {
        smallNum = num2;
        largeNum = num1;
    }

    for (let i = smallNum; i <= largeNum; i++) {
        sum += i;
    }

    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
