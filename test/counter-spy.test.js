const counterSpy = require('../counter-spy.js');

test('counterSpy([]) should return []', () => {
    expect(counterSpy([])).toEqual([]);
});

test('counterSpy(["Daryl"]) should return []', () => {
    expect(counterSpy(["Daryl"])).toEqual([]);
});

test('counterSpy(["Daryl", "Harriet", "James"]) should return ["Harriet"]', () => {
    expect(counterSpy(["Daryl", "Harriet", "James"])).toEqual(['Harriet']);
});

test('counterSpy(["Sam", "Daryl", "Chris", "Harriet", "Mauro"] should return ["Harriet","Mauro"]', () => {
    expect(counterSpy(["Sam", "Daryl", "Chris", "Harriet", "Mauro"])).toEqual(['Harriet', 'Mauro']);
});

test('counterSpy(["Mauro", "Harriet"] should return ["Harriet","Mauro"]', () => {
    expect(counterSpy(["Mauro", "Harriet"])).toEqual(['Harriet', 'Mauro']);
});

test('counterSpy(["Sam", "Paul", "Harriet", "Adrian", "Mauro"] should return ["Adrian", "Harriet","Mauro"]', () => {
    expect(counterSpy(["Sam", "Paul", "Harriet", "Adrian", "Mauro"])).toEqual(['Adrian', 'Harriet', 'Mauro']);
});