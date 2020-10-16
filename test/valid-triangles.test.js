const validTriangles = require('../valid-triangles.js');

test('validTriangles([[]]) should return 0', () => {
    expect(validTriangles([[]])).toBe(0)
});

test('validTriangles([[5, 10, 25]]) should return 0', () => {
    expect(validTriangles([[5, 10, 25]])).toBe(0)
});

test('validTriangles([[5, 4, 5]]) should return 1', () => {
    expect(validTriangles([[5, 4, 5]])).toBe(1)
});

test('validTriangles([[5, 10, 25],[5, 4, 5]]) should return 1', () => {
    expect(validTriangles([[5, 10, 25], [5, 4, 5]])).toBe(1)
});

test('validTriangles([[5, 10, 25],[5, 4, 5],[542, 586, 419]]) should return 2', () => {
    expect(validTriangles([[5, 10, 25], [5, 4, 5], [542, 586, 419]])).toBe(2)
});
