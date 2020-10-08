const foldString = require('../fold-string.js');

test('foldString("code") should return "oced"', () => {
    expect(foldString("code")).toBe("oced");
});

test('foldString("abcdef") should return "cbafed"', () => {
    expect(foldString("abcdef")).toBe("cbafed");
});

test('foldString("javascript") should return "savajtpirc"', () => {
    expect(foldString("javascript")).toBe("savajtpirc");
});

test('foldString("Northcoders") should return "htroNcsredo"', () => {
    expect(foldString("Northcoders")).toBe("htroNcsredo");
});

test('foldString("javascript is cool") should return "savajtpirc is oclo"', () => {
    expect(foldString("javascript is cool")).toBe("savajtpirc is oclo");
});