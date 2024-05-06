import { CharacterInterface } from '../../types/characterTypes';
import { BaseRoomInterface } from '../../types/roomTypes';

export class Character implements CharacterInterface {
    name: string;
    exp: number;
    gold: number;
    level: number;
    isCursed: boolean;
    isBlessed: boolean;
    currentRoom: BaseRoomInterface;
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

    setBaseAttributes() {
        this.health = 100;
        this.attack = 1;
        this.defense = 1;
        this.speed = 1;
    }

    levelUpCharacter() {
        this.level += 1;
        this.health += Math.floor(this.level * (this.health / 20));
        this.attack += Math.floor(this.level * (this.attack / 10));
        this.defense += Math.floor(this.level * (this.defense / 10));
        this.speed += Math.floor(this.level * (this.speed / 10));
    }

    increaseExp(exp: number) {
        this.exp += exp;
    }

    increaseGold(gold: number) {
        this.gold += gold;
    }

    damageCharacterHealth(damage: number) {
        this.health -= damage;
    }

    getCurrentRoom(): BaseRoomInterface {
        return this.currentRoom;
    }

    setCurrentRoom(room: BaseRoomInterface) {
        this.currentRoom = room;
    }

    getTile() {
        return this.tile;
    }
}