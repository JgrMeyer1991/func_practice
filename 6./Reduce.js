function countWords(inputWords) {
   var initial = { };
   var wordSorter = function (initial,word) {
        if (initial[word] !== undefined) {
            initial[word]++
        }
        else {
            initial[word] = 1;
        }
        return initial
    };
    return inputWords.reduce(wordSorter, initial);
}

module.exports = countWords;

//moet functie hebben die woorden opdeelt aan of ze al bestaan of niet en zo ja dan de counter
// van dat woord ++ anders nieuwe string met naam als key en 1 als waarde