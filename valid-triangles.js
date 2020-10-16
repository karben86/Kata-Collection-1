// Please do not change the name of this function
function validTriangles(triangles) {
  return triangles.map(triangle => +(triangle[0] + triangle[1] > triangle[2] && triangle[0] + triangle[2] > triangle[1] && triangle[1] + triangle[2] > triangle[0])).reduce((total, element) => total + element)
};

module.exports = validTriangles;
