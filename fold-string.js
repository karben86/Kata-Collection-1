// Please do not change the name of this function

// This function takes a sentence and splits it into words
// It then calls the foldWord function to fold each individual word
// before joining all the words back together and returning the folded sentence.
function foldString(sentence) {
  return sentence.split(" ").map(str => foldWord(str)).join(" ")
}

// This function folds each individual word
function foldWord(word) {

  let middlePos = word.length / 2;

  // The function takes each word apart and transforms 3 sections before returning their concatenation:
  // The first section goes from the first character to the middle character for even words
  // and to the character before the middle character for odd words. This section is reversed.
  return word.slice(0, Math.floor(-middlePos)).split("").reverse().join("")

    // the second section extracts the middle character for odd words only which it leaves in place
    + word.slice(Math.floor(middlePos), Math.ceil(middlePos))

    // The third section takes the rest of the word and this section is again reversed
    + word.slice(Math.ceil(middlePos)).split("").reverse().join("");
};

module.exports = foldString
