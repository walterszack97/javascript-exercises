const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    //create fibonacci array
    let firsttNum = 1;
    let nextNum = 1;
    let fibArray = [];
   
    for (i = 1; i <= num; i++){
        fibArray.push(firsttNum);
        firsttNum = firsttNum + nextNum;
        fibArray.push(nextNum)
        nextNum = nextNum + firsttNum;
    }

    return fibArray[num - 1];

};

console.log(fibonacci(-1));

// Do not edit below this line
module.exports = fibonacci;
