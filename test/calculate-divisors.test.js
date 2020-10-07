const calculateDivisors = require('../calculate-divisors.js');

test('calculateDivisors(1) should return 0', () => {
    expect(calculateDivisors(1)).toBe(0);
});

test('calculateDivisors(5) should return 3', () => {
    expect(calculateDivisors(5)).toBe(3);
});

test('calculateDivisors(6) should return 8', () => {
    expect(calculateDivisors(6)).toBe(8);
});

test('calculateDivisors(10) should return 23', () => {
    expect(calculateDivisors(10)).toBe(23);
});

test('calculateDivisors(12) should return 33', () => {
    expect(calculateDivisors(12)).toBe(33);
});

