import { MonsterInterface } from '../characterTypes/';
import { ItemInterface } from '../itemTypes/';
import { RoomTypes } from './RoomTypes';

// create an interface for the room class
export interface BaseRoomInterface {
    row: number;
    col: number;
    type: RoomTypes;
    tile?: string;
    monsters: MonsterInterface[];
    items: ItemInterface[];
    isCleared: boolean;
    getRow(): number;
    getCol(): number;
    getType(): RoomTypes;
    setType(type: RoomTypes): void;
    getTile(): string;
    getLocation(): number[];
    getMonsters(): MonsterInterface[];
    getItems(): ItemInterface[];
    setTile(tile: string): void;
    setIsCleared(isCleared: boolean): void;
    addMonster(monster: MonsterInterface): void;
    addItem(item: ItemInterface): void;
    removeMonster(monster: MonsterInterface): void;
    removeItem(item: ItemInterface): void;
    getIsRoomCleared(): boolean;
}
