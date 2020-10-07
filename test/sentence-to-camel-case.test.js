const camel = require('../sentence-to-camel-case.js');
const english = require('../sentence-to-camel-case.js');

test('camel("this sentence", true) should return "ThisSentence"', () => {
    expect(camel("this sentence", true)).toBe("ThisSentence");
});

test('camel("this sentence", false) should return "thisSentence"', () => {
    expect(camel("this sentence", false)).toBe("thisSentence");
});

test('camel("This Bigger strange Sentence", true) should return "ThisBiggerStrangeSentence"', () => {
    expect(camel("This Bigger strange Sentence", true)).toBe("ThisBiggerStrangeSentence");
});


test('english("HelloWorld") should return "Hello world."', () => {
    expect(english("HelloWorld")).toBe("Hello world.");
});

test('english("thisBiggerStrangeSentence") should return "This bigger strange sentence."', () => {
    expect(english("thisBiggerStrangeSentence")).toBe("This bigger strange sentence.");
});