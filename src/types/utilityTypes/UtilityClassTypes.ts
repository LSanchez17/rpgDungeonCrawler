import { Utilities } from "../../lib/utilities/utilities";

export interface UtilitiesInterface {
    getTimestamp(): string;
    getTimestampWithMessage(message: string): string;
    getRandomStatCategory(): string;
    getRandomInt(max: number): number;
    getBoundsByDifficulty(difficulty: string): number[];
    getRandomRoomType(): string;
}