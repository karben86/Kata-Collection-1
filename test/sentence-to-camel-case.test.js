const { sentenceToCamelCase, camelToEnglish } = require('../sentence-to-camel-case.js');

test('sentenceToCamelCase("this sentence", true) should return "ThisSentence"', () => {
    expect(sentenceToCamelCase("this sentence", true)).toBe("ThisSentence");
});

test('sentenceToCamelCase("this sentence", false) should return "thisSentence"', () => {
    expect(sentenceToCamelCase("this sentence", false)).toBe("thisSentence");
});

test('sentenceToCamelCase("This Bigger strange Sentence", true) should return "ThisBiggerStrangeSentence"', () => {
    expect(sentenceToCamelCase("This Bigger strange Sentence", true)).toBe("ThisBiggerStrangeSentence");
});


test('camelToEnglish("HelloWorld") should return "Hello world."', () => {
    expect(camelToEnglish("HelloWorld")).toBe("Hello world.");
});

test('camelToEnglish("thisBiggerStrangeSentence") should return "This bigger strange sentence."', () => {
    expect(camelToEnglish("thisBiggerStrangeSentence")).toBe("This bigger strange sentence.");
});