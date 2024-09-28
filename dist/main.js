
class ShiftCipher {
    constructor(msg, cipher) {
        this.msg = msg;
        this.cipher = cipher;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    encrypt() {
        let msg = this.msg;
        let cipher = this.cipher;
        let alphabet = this.alphabet
        let idx = alphabet.indexOf(msg.toUpperCase());

        if (typeof msg !== 'string') {
            throw 'Invalid input'
        }

        return alphabet[idx + cipher];
    }
}

module.exports = ShiftCipher;

