class Character {
    constructor() {
        this.char = `!"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~1234567890abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ`;
        this.pick = this.char.match(/[a-z]/g);
        this.finalPick = () => {
            const leng = this.pick.length;
            const index = Math.floor((Math.random() * leng) + 1);
            return this.pick[index];
        }
    }
}

module.exports = Character;