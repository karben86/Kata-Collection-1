const dnaPair = require('../dna-pairs');

test('dnaPair("") should return [[]]', () => {
    expect(dnaPair("")).toEqual([]);
});

test('dnaPair("G") should return [ ["G", "C"] ]', () => {
    expect(dnaPair("G")).toEqual([["G", "C"]]);
});

test('dnaPair("AG") should return [ ["A", "T"], ["G", "C"] ]', () => {
    expect(dnaPair("AG")).toEqual([["A", "T"], ["G", "C"]]);
});

test('dnaPair("ATAG") should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]', () => {
    expect(dnaPair("ATAG")).toEqual([["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"]]);
});
