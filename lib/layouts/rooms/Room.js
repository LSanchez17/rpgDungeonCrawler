// Create a class that represents a room within a dunegons

class Room {
    constructor(row, col, type, tile) {
        this.row = row;
        this.col = col;
        this.type = type;
        this.tile = tile;
        this.monsters = [];
        this.isCleared = false;
    }

    /**
     * Get the row of the room
     * 
     * @returns {number} row
    */
    getRow() {
        return this.row;
    }

    /**
     * Get the column of the room
     *  
     * @returns {number} column
     */
    getCol() {
        return this.col;
    }

    /**
     * Get the type of the room
     * 
     * @returns {string} type
     */
    getType() {
        return this.type;
    }

    /**
     * Get the tile of the room
     * 
     * @returns {string} tile
     */ 
    getTile() {
        return this.tile;
    }

    /**
     * Get the location of the room
     * 
     * @returns {Array} location
     */ 
    getLocation() {
        return [this.row, this.col];
    }

    /**
     * Add a monster to the room
     * 
     * @param {Monster} monster class instance
     */
    addMonster(monster) {
        this.monsters.push(monster);
    }
    
    /**
     * Get the monsters in the room
     * 
     * @returns {Array} monsters
     */
    getMonsters() {
        return this.monsters;
    }
    
    /**
     * Remove a monster from the room
     * 
     * @param {Monster} monster class instance
     */
    removeMonster(monster) {
        this.monsters = this.monsters.filter(m => m !== monster);
    }
    
    /**
     * Set the tile of the room - for uses if the player has conquered the room or is inside the room
     * 
     * @param {string} tile symbol
    */
    setTile(tile) {
        this.tile = tile;
    }

    /**
     * Set the room to cleared
     */
    setCleared() {
        this.isCleared = true;
    } 
}

export default Room;