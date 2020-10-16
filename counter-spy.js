const { TestScheduler } = require("jest");

// Please do not change the name of this function
function counterSpy(names) {
  return names.filter(name => !/[spy]/i.test(name)).sort();
};

module.exports = counterSpy;
