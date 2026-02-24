import { BaseRoomInterface } from "../../../types/roomTypes";
import { MonsterInterface } from "../../../types/characterTypes";
import { ItemInterface } from "../../../types/itemTypes";

export class Room implements BaseRoomInterface {
    row: number;
    col: number;
    type: string | null;
    tile: string;
    monsters: MonsterInterface[];
    items: ItemInterface[];
    isCleared: boolean;

    constructor(row: number, col: number, type: string | null, tile?: string) {
        this.row = row;
        this.col = col;
        this.type = type;
        this.tile = tile ?? '';
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

    getType(): string | null {
        return this.type;
    }

    setType(type: string | null) {
        this.type = type;
    }
 
    getTile() {
        return this.tile;
    }
 
    getLocation() {
        return [this.col];
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
