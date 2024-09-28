
class ShiftCipher {
    constructor(msg, cipher) {
        this.msg = msg;
        this.cipher = cipher;
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    encrypt() {
        let msg = this.msg;
        let cipher = this.cipher;
        let alphabet = this.alphabet;
        let encrypted = [];

        
        for (let i = 0; i < msg.length; i++){
            let upperLetter = msg[i].toUpperCase();
            const idx = alphabet.indexOf(upperLetter);

            if (upperLetter === alphabet[idx]) {
               encrypted.push(alphabet[idx + cipher])
            } else {
                 encrypted.push(upperLetter);
            }
        }

        if (typeof msg !== 'string') {
            throw 'Invalid input'
        }

        return encrypted.join('');
    }
}

module.exports = ShiftCipher;

