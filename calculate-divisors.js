// Please do not change the name of this function
function calculateDivisors(num) {

  let div5 = 0;
  let div3 = 0;
  let total = 0;

  // the for loop runs theoretically up to num but practically one of the break statements stops it much earlier.
  // rather than brute forcing through every number from 1 to num and checking if it is divisible by 3 or 5 the below method only runs
  // the minimum number of times we need to produce each divisor. This ensures maximum efficiency without any idle loop runs meaning that
  // every loop run will produce one divisor. We achieve this by checking in each loop run what the next divisior for 3 or the next divisor
  // for 5 (depending on which is lower) would be and provided this divisor is not above num we add it to the running total.
  for (i = 1; i < num; i++) {
    if ((div3 + 1) * 3 > (div5 + 1) * 5) {
      div5++;
      if (div5 * 5 >= num) break;
      total += div5 * 5;
    } else {
      div3++;
      if (div3 * 3 >= num) break;
      total += div3 * 3;
    }
  }
  return total;
};

module.exports = calculateDivisors
