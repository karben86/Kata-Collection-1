// Please do not change the name of this function
function tillAddition(cash) {
  return "£" + Object.entries(cash).map(element => element[0].replace("£", "").replace(/(.*\d)p/, (match, group) => group / 100) * element[1]).reduce((total, element) => total + element).toFixed(2);
};

module.exports = tillAddition;
