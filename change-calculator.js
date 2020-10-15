// Please do not change the name of this function
function changeCalculator(change) {

  // Setting up array with all possible coins and initialising tempVal.
  let coins = [200, 100, 50, 20, 10, 5, 2, 1]
  let tempVal = 0;

  // Returning the required object from a set of key-value pairs
  return Object.fromEntries(

    // mapping each possible coin to how many times we need it. This is done by dividing the current change by the current coin
    // which will work because the coins array is set up to go from the highest valued coin to the lowes valued coin in order
    // if the current coin is too high then we receive 0 if the current coin is needed then we receive the amount of times we need it and the remainder
    // i.e. for a change of 12 with the current coin being 10 we would receive an amount of 1 for coin 10 and then the remainder 2 which is passed back
    // into change to be used in the next cycle. The coin and amount are then returned in a separate array i.e. [10, 1] in this example. Once we have dealt
    // with all possible coins we receive an array that states their amount and we then use the filter function to remove coins that are not used.
    // The specific format used to pack these into arrays within a larger array i.e. [[10, 1], [2, 1]] ensures that the Object.fromEntries method
    // can look at these values like a key value pair and return the relevant object from this structure.
    coins.map(coin => {
      tempVal = Math.trunc(change / coin);
      change %= coin;
      return [coin, tempVal];
    }).filter(entries => (entries[1] != 0)));
};

module.exports = changeCalculator;
