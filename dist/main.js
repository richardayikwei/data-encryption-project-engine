class ShiftCipher {
  constructor(msg, cipher) {
    this.msg = msg;
    this.cipher = cipher;
    this.alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  encrypt() {
    let msg = this.msg;
    let cipher = this.cipher;
    let alphabet = this.alphabet;
    const encrypted = [];

    for (let i = 0; i < msg.length; i++) {
      let upperLetter = msg[i].toUpperCase();
      const idx = alphabet.indexOf(upperLetter);

      if (upperLetter === alphabet[idx]) {
        if (cipher % 26 == 0) {
          let reminderCipher = cipher % 26;
          encrypted.push(alphabet[reminderCipher + idx]);
        } else if (cipher > 26) {
          let reminder = cipher % 26;
          encrypted.push(alphabet[reminder]);
        } else {
          encrypted.push(alphabet[idx + cipher]);
        }
      } else {
        encrypted.push(upperLetter);
      }
    }

    if (typeof msg !== "string") {
      throw "Invalid input";
    }

    return encrypted.join("");
  }
}

module.exports = ShiftCipher;
