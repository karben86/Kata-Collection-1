// Please do not change the name of this function
function changeCalculator(num) {
  let coins = [200, 100, 50, 20, 10, 5, 2, 1]
  let tempVal = 0;
  const map = [['foo', 'bar'], ['baz', 42]]
  return Object.fromEntries(coins.map(coin => {
    tempVal = Math.trunc(num / coin);
    num %= coin;
    return [coin + "", tempVal];
  }).filter(entries => (entries[1] != 0)));
};

module.exports = changeCalculator;
