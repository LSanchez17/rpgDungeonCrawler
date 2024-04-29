import { BaseRoomInterface, RoomTypes, RoomTypesEnum } from "../../../types/roomTypes";
import { MonsterInterface } from "../../../types/characterTypes";
import { ItemInterface } from "../../../types/itemTypes";

export class Room implements BaseRoomInterface {
    row: number;
    col: number;
    type: RoomTypes;
    tile: string;
    monsters: MonsterInterface[];
    items: ItemInterface[];
    isCleared: boolean;

    constructor(row: number, col: number, type: RoomTypes, tile?: string) {
        this.row = row;
        this.col = col;
        this.type = type;
        this.tile = tile ?? undefined;
        this.monsters = [];
        this.items = [];
        this.isCleared = false;
    }
    
    getRow() {
        return this.row;
    }

    getCol() {
        return this.col;
    }

    getType(): RoomTypes {
        return this.type;
    }

    setType(type: RoomTypes) {
        this.type = type;
    }
 
    getTile() {
        return this.tile;
    }
 
    getLocation() {
        return [this.row, this.col];
    }

    addMonster(monster: MonsterInterface) {
        this.monsters.push(monster);
    }
    
    getMonsters(): MonsterInterface[] {
        return this.monsters;
    }
    
    removeMonster(monster: MonsterInterface) {
        this.monsters = this.monsters.filter(m => m !== monster);
    }
        setTile(tile: string) {
        this.tile = tile;
    }

    setCleared() {
        this.isCleared = true;
    } 
    
    getCleared() {
        return this.isCleared;
    }

    addItem(item: ItemInterface) {
        this.items.push(item);
    }

    getItems(): ItemInterface[] {
        return this.items;
    }
    
    removeItem(item: ItemInterface) {
        this.items = this.items.filter(i => i !== item);
    }

    setIsCleared(isCleared: boolean) {
        this.isCleared = isCleared;
    }

    getIsRoomCleared() {
        return this.isCleared;
    }
}
