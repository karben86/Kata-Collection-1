// Please do not change the name of this function

// This function takes a sentence in English and extracts all the words.
// Then it calls the translateWord function for each word to translate it
// into pigLatin and finally it joins all the pig Latin words back together
// into a full sentence.
function pigLatin(str) {
  return str.split(" ").map(translateWord).join(" ");
}


// This function takes an English word and translates into pigLatin
function translateWord(str) {

  //When a word starts with a vowel we add "way" at the end and return the result
  if (/^[aeiou]/.test(str)) return str + "way";

  //When a word starts with a consonant we remove that consonant from the start and join it at the end.

  result = str.slice(-str.length + 1) + str[0]
  //When the second character of the original word is also a consonant then once again we remove it
  //from the start and add it to the end of the word.
  if (/^[^aeiou]/.test(result)) result = result.slice(-str.length + 1) + result[0]

  // Once we have modified a word per the above we add "ay" at the end before returning the result.
  return result + "ay";
};

module.exports = pigLatin
