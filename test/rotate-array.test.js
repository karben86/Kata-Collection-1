const rotateArray = require('../rotate-array.js');

test('rotateArray([1, 2, 3], 0) should return [1,2,3]', () => {
    expect(rotateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
});

test('rotateArray([1, 2, 3], 1) should return [3, 1, 2]', () => {
    expect(rotateArray([1, 2, 3], 1)).toEqual([3, 1, 2]);
});

test('rotateArray([1, 2, 3, 4, 5], 3) should return [3, 4, 5, 1, 2]', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 3)).toEqual([3, 4, 5, 1, 2]);
});

test('rotateArray([1, 2, 3], -1) should return [2, 3, 1]', () => {
    expect(rotateArray([1, 2, 3], -1)).toEqual([2, 3, 1]);
});

test('rotateArray([1, 2, 3, 4, 5], -3) should return [4, 5, 1, 2, 3]', () => {
    expect(rotateArray([1, 2, 3, 4, 5], -3)).toEqual([4, 5, 1, 2, 3]);
});