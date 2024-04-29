import { MonsterInterface } from '../characterTypes/';
import { ItemInterface } from '../itemTypes/';
import { RoomTypes } from './RoomTypes';

export interface BaseRoomInterface {
    /** The row this room is in */
    row: number;
    /** The column this room is in */
    col: number;
    /** The type of room this is */
    type: RoomTypes;
    /** The tile that represents this room, if any */ 
    tile?: string;
    /** The monsters in this room */
    monsters: MonsterInterface[];
    /** The items in this room */
    items: ItemInterface[];
    /** Whether the room has been cleared */
    isCleared: boolean;
    /** Returns the row this room is in */
    getRow(): number;
    /** Returns the column this room is in */
    getCol(): number;
    /** Returns the type of room this is */
    getType(): RoomTypes;
    /** Sets the type this room will be */
    setType(type: RoomTypes): void;
    /** Returns the tile that represents this room */
    getTile(): string;
    /** Returns the location of this room */
    getLocation(): number[];
    /** Returns the monsters in this room */
    getMonsters(): MonsterInterface[];
    /** Returns the items in this room */
    getItems(): ItemInterface[];
    /** Sets the tile that represents this room */
    setTile(tile: string): void;
    /** Sets the cleared status of this room */
    setIsCleared(isCleared: boolean): void;
    /** Adds a monster to this room */
    addMonster(monster: MonsterInterface): void;
    /** Adds an item to this room */
    addItem(item: ItemInterface): void;
    /** Removes a monster from this room */
    removeMonster(monster: MonsterInterface): void;
    /** Removes an item from this room */
    removeItem(item: ItemInterface): void;
    /** Returns whether this room has been cleared */
    getIsRoomCleared(): boolean;
}
