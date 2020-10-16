// Please do not change the name of this function
function morseCode(str, toMorse) {

  // initialising two objects that hold the dictionaries we can use for the translation in either direction
  let transABC = { ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", "-----": "0", };
  let transMorse = { "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-", "V": "...-", "W": ".--", "X": "-..-", "Y": "-.--", "Z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----", }

  // Returning the translation. If toMorse is true we go from English to morse code, otherwise we go from morse code to English
  return toMorse ?
    // to go from English to morse code we split each sentence by a space, to get an array of words.
    // Then we split up each word in the array by its individual characters to get a nested array of characters
    // We then translate each character individually by looking it up in the relevant dictionary object.
    // We then join each character together but put a space between each character which only leaves us with the outer array.
    // Each word in the outer array is joined together but putting three spaces between each word this time.  
    str.split(" ").map(word => word.split("").map(character => transMorse[character]).join(" ")).join("   ")
    :
    //to translate from morse code to English we use the perfect reverse of the above process.
    str.split("   ").map(word => word.split(" ").map(character => transABC[character]).join("")).join(" ");
};

module.exports = morseCode;
