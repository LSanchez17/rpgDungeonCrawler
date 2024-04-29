import { UtilitiesInterface } from "../../types/utilityTypes/UtilityClassTypes";

class Utilities implements UtilitiesInterface {
    getTimestamp(): string {
        return new Date().toISOString();
    }

    getTimestampWithMessage(message: string): string {
        return `${this.getTimestamp()} - ${message}`;
    }

    getRandomStatCategory(): string {
        const categories = ['health', 'attack', 'defense', 'speed'];
        return categories[Math.floor(Math.random() * categories.length)];
    }

    getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }    

    getBoundsByDifficulty(difficulty: string): [number, number] {
        let numberOfRows: number;
        let numberOfColumns: number;

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

    getRandomRoomType(): string {
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

export const UtilitiesClass = new Utilities();
