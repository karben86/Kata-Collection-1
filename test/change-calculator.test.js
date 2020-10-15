const changeCalculator = require('../change-calculator.js');

test('changeCalculator(1) should return { 1: 1 }', () => {
    expect(changeCalculator(1)).toEqual({ '1': 1 });
});

test('changeCalculator(2) should return {2:1}', () => {
    expect(changeCalculator(2)).toEqual({ '2': 1 });
});

test('changeCalculator(7)) should return {5:1,2:1}', () => {
    expect(changeCalculator(7)).toEqual({ '5': 1, '2': 1 });
});

test('changeCalculator(13) should return {10:1,2:1,1:1}', () => {
    expect(changeCalculator(13)).toEqual({ '10': 1, '2': 1, '1': 1 });
});
