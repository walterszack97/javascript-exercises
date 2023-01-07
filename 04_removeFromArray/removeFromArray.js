
const removeFromArray = function(array, ...remove) {
    let newArray;
    for (let i = 0; i < remove.length; i++)
        for (let p = 0; p < array.length; p++) {
            if (array[p] === remove[i]) {
                array.splice(p, 1);
            }
        }

    return newArray = array;
};

removeFromArray([1, 2, 3, 4], 3, 2, 4);

// Do not edit below this line
module.exports = removeFromArray;
