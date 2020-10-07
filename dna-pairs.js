// Please do not change the name of this function
function dnaPairs(dna) {

  // Array.from(dna) splits the test string into an array so "AG" for instance becomes ["A","G"].
  // map takes each element from the array and maps it to the relevant pair i.e. ["A","G"] becomes [["A", "T"], ["T", "A"]].
  // In order for map to find the relevant pair we use a register of all possible DNA combinations in an array i.e. [["G", "C"], ["C", "G"], ["T", "A"], ["A", "T"]]
  // and in this array we look for the specific pair (using the find function) where the first element (pair[0]) matches the character the map
  // function is currently dealing with.
  return Array.from(dna).map(dnasingle => [["G", "C"], ["C", "G"], ["T", "A"], ["A", "T"]].find(pair => pair[0] === dnasingle));
};



module.exports = dnaPairs;
