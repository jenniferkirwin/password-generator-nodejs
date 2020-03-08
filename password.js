const Character = require(`./character`);

class Password {
    constructor(passLen, charTypes) {
        this.passLen = passLen;
        this.charTypes = charTypes;
        this.password = [];
    }

    basePassword() {
        this.charTypes.forEach(element => {
            const newCharObj = new Character(element);
            const newChar = newCharObj.finalPick();
            this.password.push(newChar);
        });
        console.log(this.password);
        return this.password;
        
    }
}

module.exports = Password;