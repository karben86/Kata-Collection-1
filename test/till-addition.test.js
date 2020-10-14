const tillAddition = require('../till-addition.js');

test('tillAddition({ "1p": 1, "2p": 1 }) should return £0.03', () => {
    expect(tillAddition({ "1p": 1, "2p": 1 })).toBe("£0.03")
});

test('tillAddition({ "1p": 1, "2p": 1 }) should return £0.03', () => {
    expect(tillAddition({ "1p": 3, "2p": 2, "10p": 4 })).toBe("£0.47")
});

test('tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 }) should return £0.03', () => {
    expect(tillAddition({ "1p": 1, "2p": 1, "5p": 1, "10p": 1, "20p": 1 })).toBe("£0.38")
});

test('tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 }) should return £1.85', () => {
    expect(tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 })).toBe("£1.85")
});

test('tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1 }) should return £1.85', () => {
    expect(tillAddition({ "5p": 1, "10p": 1, "20p": 1, "50p": 1, "£1": 1, "£10": 2 })).toBe("£21.85")
});