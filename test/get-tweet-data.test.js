const getTweetData = require('../get-tweet-data.js');

test('getTweetData("My awesome tweet") should return "{ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 }"', () => {
    expect(getTweetData("My awesome tweet")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 });
});

test('getTweetData("My awesome tweet to @northcoders") should return "{ tags: [], mentions: [\'@northcoders\'], tagCount: 0, mentionCount: 1, length: 32 }"', () => {
    expect(getTweetData("My awesome tweet to @northcoders")).toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 });
});

test('getTweetData("My awesome tweet about #coding") should return "{ tags: [\'#coding\'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 }"', () => {
    expect(getTweetData("My awesome tweet about #coding")).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 });
});

test('getTweetData("My awesome tweet about #coding to @northcoders") should return "{ tags: [\'#coding\'], mentions: [\'@northcoders\'], tagCount: 1, mentionCount: 1, length: 46 }"', () => {
    expect(getTweetData("My awesome tweet about #coding to @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 });
});

test('getTweetData("I am #coding with @northcoders I love #coding and @northcoders") should return { tags: [\'#coding\'], mentions: [\'@northcoders\'], tagCount: 1, mentionCount: 1, length: 62 }"', () => {
    expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 });
});