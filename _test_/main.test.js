const ShiftCipher = require('../dist/main');

describe('ShiftCipher', () => {
    describe('encrypt', () => {
        test("a number", () => {
            const answer = new ShiftCipher(1, 1);
            expect(() => {answer.encrypt()}).toThrow("Invalid input");
         });
        test("a symbol string", () => {
            const answer = new ShiftCipher('@', 1);
            expect(answer.encrypt()).toBe('@'); 
         });
        test("a string to one step cipher", () => {
            const answer = new ShiftCipher('a', 1);
            expect(answer.encrypt()).toBe('B'); 
         });
        test("three letters", () => {
            const answer = new ShiftCipher('abc', 1);
            expect(answer.encrypt()).toBe('BCD'); 
         });
    });
});