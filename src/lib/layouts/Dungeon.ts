import Utilities from "../utilities/Utilities";
import { Room } from './rooms/Room';
import { DungeonInterface } from '../../types/roomTypes/DungeonRoom';
import { Character } from '../character/Character';

export class Dungeon implements DungeonInterface {
    rooms: Room[];
    numRows: number;
    numCols: number;
    
    constructor() {
        this.rooms = [];
        this.numRows = 0;
        this.numCols = 0;
    }

    /**
     * Each room is a class instance of the Room class
     * We add this to the dungeon's rooms array
     */
    addRoom(room: Room) {
        this.rooms.push(room);
    }

    /**
     * This returns the current rooms in the dungeon
     */
    getRooms() {
        return this.rooms;
    }

    /**
     * This returns the specific room within the dungeon
     */
    getRoom(row: number, col: number) {
        return this.rooms[row][col];
    }

    /**
     * Enter the dungeon, set the players current room to the starting point of the dungeon
     * Denoted by the Symbol Ü
     */
    enterDungeon(character: Character) {
        // set the players current starting room, should be random within the bounds of the dungeon array
        const dungeonRow = Math.floor(Math.random() * this.rooms.length);
        const dungeonColumn = Math.floor(Math.random() * this.rooms.length);
        const startingRoomLocation = this.getRoom(dungeonRow, dungeonColumn);
        
        character.setCurrentRoom(startingRoomLocation);
        this.setPlayerTile(startingRoomLocation.getLocation(), character.getTile());
    }

    /**
     * This sets the player's tile within the dungeon
     */
    setPlayerTile(room: Room, tile: string) {
        const row = room.getRow();
        const col = room.getCol();

        this.rooms[row][col].setTile(row, col, tile);
    }

    /**
     * This moves the player within the dungeon to a new location
     */
    movePlayer(direction: string, character: Character) {
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
            currentRoom.setTile('x');
        }

        const newRoom = this.getRoom(newRow, newCol);
        character.setCurrentRoom(newRoom);
        newRoom.setTile(character.getTile());
    }

    /**
     * This generates the dungeon layout
     * It will pick a random number of rows and columns based on the difficulty set for the world
     * Then for each entry in the array, it will create a new room class instance (sometimes, not always)
     * These room instances can then be assigned to be a special type of room (see rooms folder)
     */
    generateDungeon(difficulty: string) {
        const [numberofRows, numberOfColumns] = Utilities.getBoundsByDifficulty(difficulty);
        this.numRows = numberofRows;
        this.numCols = numberOfColumns;

        for (let row = 0; row < numberofRows; row++) {
            this.rooms.push([]);
            const shouldSpecializeThisRoom = Utilities.getRandomInt(100) > 50;
            let roomType = null;

            if (shouldSpecializeThisRoom) {
                roomType = Utilities.getRandomRoomType();
            }
            
            for (let col = 0; col < numberOfColumns; col++) {
                const room = new Room(row, col, roomType);

                this.rooms[row].push(room);
            }
        }
    }

}