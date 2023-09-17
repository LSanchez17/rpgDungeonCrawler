class Utilities {
    static getTimestamp() {
        return new Date().toISOString();
    }

    static getTimestampWithMessage(message) {
        return `${this.getTimestamp()} - ${message}`;
    }

    static getRandomStatCategory() {
        const categories = ['health', 'attack', 'defense', 'speed'];
        return categories[Math.floor(Math.random() * categories.length)];
    }

    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }    
}

export default Utilities;