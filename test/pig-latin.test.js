const pigLatin = require('../pig-latin.js');

test('pigLatin("northcoders") should return "orthcodersnay"', () => {
    expect(pigLatin("northcoders")).toBe("orthcodersnay");
});

test('pigLatin("sheffield") should return "effieldshay"', () => {
    expect(pigLatin("sheffield")).toBe("effieldshay");
});

test('pigLatin("algorithm") should return "algorithmway"', () => {
    expect(pigLatin("algorithm")).toBe("algorithmway");
});

test('pigLatin("keep on coding") should return "eepkay onway odingcay"', () => {
    expect(pigLatin("keep on coding")).toBe("eepkay onway odingcay");
});
