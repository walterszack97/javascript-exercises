const palindromes = function (word) {
    //remove punctuation
    let myWord = word.toLowerCase().replace(/[^a-z]/g, "");
    let wordLength = myWord.length;
    for (let i = 0; i < wordLength; i++){
        if (myWord[i] !== myWord[wordLength - 1]){
            return false;
        }
        wordLength--;
    }
    return true;
};

const word = "racecar racecar"

palindromes(word);

// Do not edit below this line
module.exports = palindromes;
