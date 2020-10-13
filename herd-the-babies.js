// Please do not change the name of this function
function herdTheBabies(str) {
  return str.split("").sort(Intl.Collator("en", { caseFirst: "upper" }).compare).join("");
};

module.exports = herdTheBabies;
