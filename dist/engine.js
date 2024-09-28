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
        if (typeof msg !== 'string') {
            throw 'Input not a string';
        }
        return msg.toUpperCase();
    }
}
export default ShiftCipher;
