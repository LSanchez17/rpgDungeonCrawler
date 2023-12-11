import { BaseRoomInterface } from "../roomTypes";

export interface CharacterInterface {
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
    setCurse(): void;
    removeCurse(): void;
    setBlessing(): void;
    removeBlessing(): void;
    setBaseAttributes(): void;
    levelUpCharacter(): void;
    increaseExp(exp: number): void;
    increaseGold(gold: number): void;
    getCurrentRoom(): BaseRoomInterface;
    setCurrentRoom(room: BaseRoomInterface): void;
    getTile(): string;
}