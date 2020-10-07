// Please do not change the name of this function

function sentenceToCamelCase(sentence, isUpper) {

  // Capitalise the first character in the case where we want true camel case to be returned.
  if (isUpper) sentence = sentence[0].toUpperCase() + sentence.slice(1);

  // Capitalise the first character for any character following a space
  return sentence.replace(/\s\w/g, char => char.trim().toUpperCase());
};

function camelToEnglish(sentence) {
  return sentence[0].toUpperCase() + sentence.slice(1).replace(/[A-Z]/g, char => " " + char.toLowerCase()) + ".";
}

module.exports = sentenceToCamelCase;
module.exports = camelToEnglish;