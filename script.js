let U = 'log'

class Generate {
    constructor() {
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_@!'
    }

    init(length) {
        let randomString = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * this.characters.length);
            randomString += this.characters.charAt(randomIndex);
        }

        return randomString;
    }
}

const generator = new Generate();
const randomToken = generator.init(64);

console[U](randomToken);
