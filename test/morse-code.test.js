const morseCode = require('../morse-code.js');

test('morseCode(".... ..", false) should return HI', () => {
    expect(morseCode(".... ..", false)).toBe("HI")
});


test('morseCode(".... . .-.. .-.. ---", false) should return HELLO', () => {
    expect(morseCode(".... . .-.. .-.. ---", false)).toBe("HELLO")
});


test('morseCode("-. --- .-. - .... -.-. --- -.. . .-. ...", false) should return NORTHCODERS', () => {
    expect(morseCode("-. --- .-. - .... -.-. --- -.. . .-. ...", false)).toBe("NORTHCODERS")
});


test('morseCode("--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...", false) should return GOOD MORNING NORTHCODERS', () => {
    expect(morseCode("--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...", false)).toBe("GOOD MORNING NORTHCODERS")
});


test('morseCode("HI", true) should return .... ..', () => {
    expect(morseCode("HI", true)).toBe(".... ..")
});

test('morseCode("HELLO", true) should return .... . .-.. .-.. ---', () => {
    expect(morseCode("HELLO", true)).toBe(".... . .-.. .-.. ---")
});