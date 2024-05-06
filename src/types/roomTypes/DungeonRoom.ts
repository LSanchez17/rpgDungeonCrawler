import { CharacterInterface } from "../characterTypes";
import { BaseRoomInterface } from "./BaseRoom";

export interface DungeonInterface extends Partial<BaseRoomInterface> {
    /** The array of rooms in a dungeon */
    rooms: BaseRoomInterface[];
    /** The number of rows in a dungeon */
    numRows: number;
    /** The number of columns in a dungeon */
    numCols: number;
    /** Adds a room to a dungeon */
    addRoom(room: BaseRoomInterface): void;
    /** Returns the current rooms in the dungeon */
    getRooms(): BaseRoomInterface[];
    /** Returns a specific room within the dungeon */
    getRoom(row: number, col: number): BaseRoomInterface;
    /** Set the player's current room to the starting point of the dungeon */
    enterDungeon(character: CharacterInterface): void;
    /** Sets the player's tile within the dungeon */
    setPlayerTile(room: BaseRoomInterface, tile: string): void;
    /** Moves the player within the dungeon to a new location */
    movePlayer(direction: string, character: CharacterInterface): void;
    /** Generates a dungeon based on the difficulty */
    generateDungeon(difficulty: string): void;
}