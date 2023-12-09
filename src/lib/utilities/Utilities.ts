export class Utilities {
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

    static getBoundsByDifficulty(difficulty) {
        let numberOfRows;
        let numberOfColumns;

        switch(difficulty) {
            case 'Easy':
                numberOfRows = Math.floor(Math.random() * 10) + 1;
                numberOfColumns = Math.floor(Math.random() * 10) + 1;

                return [numberOfRows, numberOfColumns];
            case 'Medium':
                numberOfRows = Math.floor(Math.random() * 25) + 1;
                numberOfColumns = Math.floor(Math.random() * 25) + 1;

                return [numberOfRows, numberOfColumns];
            case 'Hard':
                numberOfRows = Math.floor(Math.random() * 50) + 1;
                numberOfColumns = Math.floor(Math.random() * 50) + 1;

                return [numberOfRows, numberOfColumns];
            case 'Legendary':
                numberOfRows = Math.floor(Math.random() * 100) + 1;
                numberOfColumns = Math.floor(Math.random() * 100) + 1;

                return [numberOfRows, numberOfColumns];
            default:
                return [10, 10];
        }
    }

    static getRandomRoomType() {
        const roomTypes = [
            'FreeSpace', 'FreeSpace', 'Magic', 
            'FreeSpace', 'FreeSpace', 'Poison', 
            'FreeSpace', 'FreeSpace', 'RestRoom', 
            'FreeSpace', 'FreeSpace', 'TrapRoom', 
            'FreeSpace', 'FreeSpace', 'Treasure', 
            'FreeSpace', 'FreeSpace', 'FreeSpace'
        ];
        
        return roomTypes[Math.floor(Math.random() * roomTypes.length)];
    }
}