import { BaseRoomInterface } from "../roomTypes";

export interface CharacterInterface {
    /** The name of this character */
    name: string;
    /** The experience this character has */
    exp: number;
    /** The gold this character has */
    gold: number;
    /** The level of this character */
    level: number;
    /** Whether this character is cursed */
    isCursed: boolean;
    /** Whether this character is blessed */
    isBlessed: boolean;
    /** The current room this character is in */
    currentRoom: BaseRoomInterface;
    /** The tile that represents this character */
    tile: string;
    /** The health of this character */
    health: number;
    /** The base attack value of this character */
    attack: number;
    /** The base defense value of this character */
    defense: number;
    /** The base speed value of this character */
    speed: number;
    /** The base wisdom value of this character */
    wisdom: number;
    /** Sets the character as cursed */
    setCurse(): void;
    /** Removes the curse from the character */
    removeCurse(): void;
    /** Sets the character as blessed */
    setBlessing(): void;
    /** Removes the blessing from the character */
    removeBlessing(): void;
    /** Sets the base attributes of a character if no class is chosen */
    setBaseAttributes(): void;
    /** Levels up the character */
    levelUpCharacter(): void;
    /** Increase the current experience points of the character */
    increaseExp(exp: number): void;
    /** Increase the current gold of the character */
    increaseGold(gold: number): void;
    /** Gets the current room the character is in */
    getCurrentRoom(): BaseRoomInterface;
    /** Sets the current room the character is in */
    setCurrentRoom(room: BaseRoomInterface): void;
    /** Gets the tile of the character */
    getTile(): string;
}