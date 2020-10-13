const getTweetData = require('../get-tweet-data.js');

test('getTweetData("My awesome tweet") should return "{ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16, urlCount: 0}"', () => {
    expect(getTweetData("My awesome tweet")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16, urlCount: 0, email: 0 });
});

test('getTweetData("My awesome tweet to @northcoders") should return "{ tags: [], mentions: [\'@northcoders\'], tagCount: 0, mentionCount: 1, length: 32, urlCount: 0}"', () => {
    expect(getTweetData("My awesome tweet to @northcoders")).toEqual({ tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32, urlCount: 0, email: 0 });
});

test('getTweetData("My awesome tweet about #coding") should return "{ tags: [\'#coding\'], mentions: [], tagCount: 1, mentionCount: 0, length: 30, urlCount: 0  }"', () => {
    expect(getTweetData("My awesome tweet about #coding")).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30, urlCount: 0, email: 0 });
});

test('getTweetData("My awesome tweet about #coding to @northcoders") should return "{ tags: [\'#coding\'], mentions: [\'@northcoders\'], tagCount: 1, mentionCount: 1, length: 46, urlCount: 0  }"', () => {
    expect(getTweetData("My awesome tweet about #coding to @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46, urlCount: 0, email: 0 });
});

test('getTweetData("I am #coding with @northcoders I love #coding and @northcoders") should return { tags: [\'#coding\'], mentions: [\'@northcoders\'], tagCount: 1, mentionCount: 1, length: 62, urlCount: 0  }"', () => {
    expect(getTweetData("I am #coding with @northcoders I love #coding and @northcoders")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62, urlCount: 0, email: 0 });
});

test('getTweetData("My awesome tweet about #coding to @northcoders includes some url called http://www.someurl.com") should return "{ tags: [\'#coding\'], mentions: [\'@northcoders\'], tagCount: 1, mentionCount: 1, length: 94, urlCount: 1  }"', () => {
    expect(getTweetData("My awesome tweet about #coding to @northcoders includes some url called http://www.someurl.com")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 94, urlCount: 1, email: 0 });
});

test('getTweetData("I am #coding with @northcoders and my email address is example@fake.com") should return { tags: [\'#coding\'], mentions: [\'@northcoders\'], tagCount: 1, mentionCount: 1, length: 71, urlCount: 0, email: 0  }"', () => {
    expect(getTweetData("I am #coding with @northcoders and my email address is example@fake.com")).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 71, urlCount: 0, email: 1 });
});