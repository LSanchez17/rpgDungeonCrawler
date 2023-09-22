// Create a class for managing the layout of the dungeon
class Dungeon {
    constructor() {
        this.rooms = [];
    }

    /**
     * Each room is a class instance of the Room class
     * We add this to the dungeon's rooms array
     * 
     * @param {Room} room class instance to add
     */
    addRoom(room) {
        this.rooms.push(room);
    }

    /**
     * This returns the current rooms in the dungeon
     * 
     * @returns {Array} rooms in the dungeon
     */
    getRooms() {
        return this.rooms;
    }

    /**
     * This returns the specific room within the dungeon
     * 
     * @param {number} row of the room
     * @param {number} col of the room
     * @returns {Room} room class instance
     */
    getRoom(row, col) {
        return this.rooms[row][col];
    }

    /**
     * Enter the dungeon, set the players current room to the starting point of the dungeon
     * Denoted by the Symbol Ü
     * 
     * @param {Character} character class instance
     */
    enterDungeon(character) {
        // set the players current starting room, should be random within the bounds of the dungeon array
        const dungeonRow = Math.floor(Math.random() * this.rooms.length);
        const dungeonColumn = Math.floor(Math.random() * this.rooms[startingLayer].length);
        const startingRoomLocation = this.getRoom(dungeonRow, dungeonColumn);
        
        character.setCurrentRoom(startingRoomLocation);
        this.setPlayerTile(startingRoomLocation.getLocation(), character.getTile());
    }

    /**
     * This sets the player's tile within the dungeon
     * 
     * @param {Array} coordinates of the room within the dungeon
     * @param {string} tile symbol
     */
    setPlayerTile(room, tile) {
        const row = room.getRow();
        const col = room.getCol();

        this.rooms[row][col].setTile(row, col, tile);
    }

    /**
     * This moves the player within the dungeon to a new location
     * 
     * @param {string} direction of movement (UP, DOWN, LEFT, RIGHT)
     * @param {Character} Character class instance
     */
    movePlayer(direction, character) {
        const currentRoom = character.getCurrentRoom();
        const currentRow = currentRoom.getRow();
        const currentCol = currentRoom.getCol();
        let newRow = currentRow;
        let newCol = currentCol;

        switch (direction) {
            case 'up':
                if (currentRow > 0) {
                    newRow = currentRow - 1;
                }
                break;
            case 'down':
                if (currentRow < this.numRows - 1) {
                    newRow = currentRow + 1;
                }
                break;
            case 'left':
                if (currentCol > 0) {
                    newCol = currentCol - 1;
                }
                break;
            case 'right':
                if (currentCol < this.numCols - 1) {
                    newCol = currentCol + 1;
                }
                break;
            default:
                break;
        }

        // Leave an 'x' in the previous location if the player was already in a location within the array
        if (currentRow !== newRow || currentCol !== newCol) {
            currentRoom.setTile(currentRow, currentCol, 'x');
        }

        const newRoom = this.getRoom(newRow, newCol);
        player.setCurrentRoom(newRoom);
        newRoom.setTile(player.getSymbol());
    }
}

export default Dungeon;