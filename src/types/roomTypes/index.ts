import { MonsterInterface } from '../characterTypes/';
import { ItemInterface } from '../itemTypes/';

// create an interface for the room class
export interface RoomInterface {
    row: number;
    col: number;
    type: string;
    tile: string;
    monsters: MonsterInterface[];
    items: ItemInterface[];
    isCleared: boolean;
    getRow(): number;
    getCol(): number;
    getType(): string;
    setType(type: string): void;
    getTile(): string;
    getLocation(): number[];
    getMonsters(): MonsterInterface[];
    getItems(): ItemInterface[];
    getIsCleared(): boolean;
    setRow(row: number): void;
    setCol(col: number): void;
    setTile(tile: string): void;
    setLocation(location: number[]): void;
    setMonsters(monsters: MonsterInterface[]): void;
    setItems(items: ItemInterface[]): void;
    setIsCleared(isCleared: boolean): void;
    addMonster(monster: MonsterInterface): void;
    addItem(item: ItemInterface): void;
    removeMonster(monster: MonsterInterface): void;
    removeItem(item: ItemInterface): void;
}
