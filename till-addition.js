// Please do not change the name of this function
function tillAddition(cash) {

  //We return the final result preceded by a pound sign which works by first of all converting the key value pairs to an aray
  return "£" + Object.entries(cash)

    //and then multiplying each coin/note (element[0]) with the quantity we hold (element[1]).
    //in order to use the coins and notes in our calculation we need to convert them first into the correct monetary value.
    //Anything preceded by a pound sign is converted to a pure number i.e. £10 is converted to 10.
    //Anything succeeded by a p is converted to a pure number and divided by 100 i.e. 10p is converted to 0.01.
    .map(element => element[0].replace("£", "").replace(/(.*\d)p/, (match, group) => group / 100) * element[1])

    // We end up with an array of monetary amounts per coin/note i.e. [0.41000, 2, 1.3] which is then added together 
    // and fixed to two decimal places i.e. 3.71. 
    .reduce((total, element) => total + element).toFixed(2);
};

module.exports = tillAddition;
