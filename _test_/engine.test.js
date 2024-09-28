const ShiftCipher = require("../dist/engine");

describe("ShiftCipher", () => {
  test("upperCase", () => {
    const msgEnc1 = new ShiftCipher("hello", 26);
    expect(msgEnc1.encrypt()).toBe("HELLO");
  });
  test("number input", () => {
    const msgEnc1 = new ShiftCipher(1, 26);
    expect(() => {
      msgEnc1.encrypt();
    }).toThrow("Input not a string");
  });
  // test("mix of alpahbet and number or symbol", () => {
  //   const msgEnc1 = new ShiftCipher("hello1", 26);
  //   expect(msgEnc1.encrypt()).toBe("HELLO1");
  // });
});
