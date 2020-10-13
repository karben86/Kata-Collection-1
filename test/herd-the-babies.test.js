const herdTheBabies = require('../herd-the-babies.js');

test('herdTheBabies("aA") should return "Aa"', () => {
    expect(herdTheBabies("aA")).toBe("Aa");
});
test('herdTheBabies("aBA") should return "AaB"', () => {
    expect(herdTheBabies("aBA")).toBe("AaB");
});
test('herdTheBabies("bbaBccAC") should return "AaBbbCcc"', () => {
    expect(herdTheBabies("bbaBccAC")).toBe("AaBbbCcc");
});
test('herdTheBabies("AaBbbBaAbAbbAbB") should return "AAAAaaBBBbbbbbb"', () => {
    expect(herdTheBabies("AaBbbBaAbAbbAbB")).toBe("AAAAaaBBBbbbbbb");
});