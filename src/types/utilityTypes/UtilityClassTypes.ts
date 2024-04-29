export interface UtilitiesInterface {
    /** Returns a stringified timestamp */
    getTimestamp(): string;
    /** Returns a stringified timestamp with a message */
    getTimestampWithMessage(message: string): string;
    /** Returns a random stat category */
    getRandomStatCategory(): string;
    /** Returns a random number upperboudn by the input */
    getRandomInt(max: number): number;
    /** Returns the dungeon bounds(rows, columns); determined by difficulty */
    getBoundsByDifficulty(difficulty: string): [number, number];
    /** Returns a random room type */
    getRandomRoomType(): string;
}