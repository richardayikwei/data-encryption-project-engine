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
        test("short sentence", () => {
            const answer = new ShiftCipher('abc is good', 1);
            expect(answer.encrypt()).toBe('BCD JT HPPE'); 
         });
        test("short sentence with number", () => {
            const answer = new ShiftCipher('abc is 1 of the best', 1);
            expect(answer.encrypt()).toBe('BCD JT 1 PG UIF CFTU'); 
         });
        test("Cipher equal to alphabet length", () => {
            const answer = new ShiftCipher('z', 26);
            expect(answer.encrypt()).toBe('Z'); 
        });
        test("Cipher exceeding alphabet length", () => {
            const answer = new ShiftCipher('z', 27);
            expect(answer.encrypt()).toBe('B'); 
         });
            test("short sentence with cipher exceeding alphbet length", () => {
              const answer = new ShiftCipher("abc is good", 26);
              expect(answer.encrypt()).toBe("ABC IS GOOD");
            });
    });
});