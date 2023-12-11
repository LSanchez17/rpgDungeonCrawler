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

    /**
     * Get the row of the room
    */
    getRow() {
        return this.row;
    }

    /**
     * Get the column of the room
     */
    getCol() {
        return this.col;
    }

    /**
     * Get the type of the room
     */
    getType(): RoomTypes {
        return this.type;
    }

    /**
     * Set the room type
     */
    setType(type: RoomTypes) {
        this.type = type;
    }

    /**
     * Get the tile of the room
     */ 
    getTile() {
        return this.tile;
    }

    /**
     * Get the location of the room
     */ 
    getLocation() {
        return [this.row, this.col];
    }

    /**
     * Add a monster to the room
     */
    addMonster(monster: MonsterInterface) {
        this.monsters.push(monster);
    }
    
    /**
     * Get the monsters in the room
     */
    getMonsters(): MonsterInterface[] {
        return this.monsters;
    }
    
    /**
     * Remove a monster from the room
     */
    removeMonster(monster: MonsterInterface) {
        this.monsters = this.monsters.filter(m => m !== monster);
    }
    
    /**
     * Set the tile of the room - for uses if the player has conquered the room or is inside the room
    */
    setTile(tile: string) {
        this.tile = tile;
    }

    /**
     * Set the room to cleared
     */
    setCleared() {
        this.isCleared = true;
    } 
    
    /**
     * Get the room cleared status
     */
    getCleared() {
        return this.isCleared;
    }

    /**
     * Add an item to the room
     */
    addItem(item: ItemInterface) {
        this.items.push(item);
    }

    /**
     * Get the items in the room
     */
    getItems(): ItemInterface[] {
        return this.items;
    }
    
    /**
     * Remove an item from the room
     */
    removeItem(item: ItemInterface) {
        this.items = this.items.filter(i => i !== item);
    }

    /**
     * Sets the room as cleared
     */
    setIsCleared(isCleared: boolean) {
        this.isCleared = isCleared;
    }

    /**
     * Returns wether or not the room is cleared
     */
    getIsRoomCleared() {
        return this.isCleared;
    }
}
