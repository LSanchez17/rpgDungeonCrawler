// create basic character class

class Character {
    constructor(name) {
        this.name = name;
        this.exp = 0;
        this.gold = 0;
        this.level = 0;
        this.isCursed = false;
        this.isBlessed = false;
        this.currentRoom = null;
        this.tile = 'Ü';
    }

    /**
     * The curse and blessing methods are to track these properties for now
     */
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
     * 
     * @param {number} exp number
     */
    increaseExp(exp) {
        this.exp += exp;
    }

    /**
     * Increase the character's gold
     * 
     * @param {number} gold number
     */
    increaseGold(gold) {
        this.gold += gold;
    }

    /**
     * damage the character's health
     * TODO: improve this, account for defense
     * 
     * @param {number} damage number
     */
    damageCharacterHealth(damage) {
        this.health -= damage;
    }

    /**
     * get the current player's location within the dungeon
     */
    getCurrentRoom() {
        return this.currentRoom;
    }

    /**
     * set the current player's location within the dungeon
     * 
     * @param {Room} room class instance
     */
    setCurrentRoom(room) {
        this.currentRoom = room;
    }

    
    /**
     * Return the character Tile
     * 
     * @returns {string} character tile - Ü
     */
    getTile() {
        return this.tile;
    }


}

export default Character;