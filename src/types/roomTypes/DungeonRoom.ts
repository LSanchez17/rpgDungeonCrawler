import { CharacterInterface } from "../characterTypes";
import { BaseRoomInterface } from "./BaseRoom";

export interface DungeonInterface extends Partial<BaseRoomInterface> {
    rooms: BaseRoomInterface[];
    numRows: number;
    numCols: number;
    addRoom(room: BaseRoomInterface): void;
    getRooms(): BaseRoomInterface[];
    getRoom(row: number, col: number): BaseRoomInterface;
    enterDungeon(character: any): void;
    setPlayerTile(room: BaseRoomInterface, tile: string): void;
    movePlayer(direction: string, character: CharacterInterface): void;
    generateDungeon(difficulty: string): void;
}