// Please do not change the name of this function
function rotateArray(arr, num) {
  // by adding arr.length to the index of each element I shift it's position by one full length
  // which has no impact overall as I am using the modulo operator but it mean that I don't have to deal with negative
  // numbers separately. The modulo operator then ensures that whenever we reach the upper or lower index of the array that
  // the index is wrapped around to go to the opposite end.
  return arr.map((element, index) => arr[(index + arr.length - num) % arr.length])
};


module.exports = rotateArray;
