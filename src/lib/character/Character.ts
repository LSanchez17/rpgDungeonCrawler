import { CharacterInterface } from '../../types/characterTypes';
import { RoomInterface } from '../../types/roomTypes';

export class Character implements CharacterInterface {
    name: string;
    exp: number;
    gold: number;
    level: number;
    isCursed: boolean;
    isBlessed: boolean;
    currentRoom: RoomInterface;
    tile: string;
    health: number;
    attack: number;
    defense: number;
    speed: number;

    constructor(name: string) {
        this.name = name;
        this.exp = 0;
        this.gold = 0;
        this.level = 0;
        this.isCursed = false;
        this.isBlessed = false;
        this.currentRoom = null;
        this.tile = 'Ü';
    }

    setCurse() {
        this.isCursed = true;
    }

    removeCurse() {
        this.isCursed = false;
    }

    setBlessing() {
        this.isBlessed = true;
    }

    removeBlessing() {
        this.isBlessed = false;
    }

    /**
     * Set the basic attributes of every character if they don't pick a class to start off with
     */
    setBaseAttributes() {
        this.health = 100;
        this.attack = 1;
        this.defense = 1;
        this.speed = 1;
    }

    /**
     * level up a character and increase their stats
     * TODO: Improve this leveling up algorithm
     */
    levelUpCharacter() {
        this.level += 1;
        this.health += Math.floor(this.level * (this.health / 20));
        this.attack += Math.floor(this.level * (this.attack / 10));
        this.defense += Math.floor(this.level * (this.defense / 10));
        this.speed += Math.floor(this.level * (this.speed / 10));
    }

    /**
     * Increase the character's experience points
     */
    increaseExp(exp: number) {
        this.exp += exp;
    }

    /**
     * Increase the character's gold
     */
    increaseGold(gold: number) {
        this.gold += gold;
    }

    /**
     * damage the character's health
     * TODO: improve this, account for defense
     */
    damageCharacterHealth(damage: number) {
        this.health -= damage;
    }

    /**
     * get the current player's location within the dungeon
     */
    getCurrentRoom(): RoomInterface {
        return this.currentRoom;
    }

    /**
     * set the current player's location within the dungeon
     */
    setCurrentRoom(room: RoomInterface) {
        this.currentRoom = room;
    }

    
    /**
     * Return the character Tile
     */
    getTile() {
        return this.tile;
    }


}