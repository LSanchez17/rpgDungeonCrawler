import { UtilitiesClass } from "../utilities/Utilities";
import { Room } from './rooms/Room';
import { DungeonInterface } from '../../types/roomTypes/DungeonRoom';
import { CharacterInterface } from "../../types";

export class Dungeon implements DungeonInterface {
    rooms: Room[];
    numRows: number;
    numCols: number;
    
    constructor() {
        this.rooms = [];
        this.numRows = 0;
        this.numCols = 0;
    }

    addRoom(room: Room) {
        this.rooms.push(room);
    }

    getRooms() {
        return this.rooms;
    }

    getRoom(row: number, col: number) {
        // TODO: Update for multidimensional dungeons
        return this.rooms[col];
    }

    enterDungeon(character: CharacterInterface) {
        // set the players current starting room, should be random within the bounds of the dungeon array
        // TODO: update this for multidimensional dungeons
        const dungeonRow = 0;
        const dungeonColumn = Math.floor(Math.random() * this.numCols);
        const startingRoomLocation = this.getRoom(0, dungeonColumn);

        character.setCurrentRoom(startingRoomLocation);
        this.setPlayerTile(startingRoomLocation, character.getTile());
    }

    setPlayerTile(room: Room, tile: string) {
        const row = room.getRow();
        const col = room.getCol();

        // TODO: Update for multidimensional dungeons
        this.rooms[col].setTile(tile);
    }

    movePlayer(direction: string, character: CharacterInterface) {
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

    generateDungeon(difficulty: string) {
        // TODO: Turn into multidomensional array if single dimmension array set up works fine
        [this.numRows, this.numCols] = UtilitiesClass.getBoundsByDifficulty(difficulty);

        for (let i = 0; i < this.numCols; i++) {
            const shouldSpecializeThisRoom = UtilitiesClass.getRandomInt(100) > 50;
            let roomType = null;

            if (shouldSpecializeThisRoom) {
                roomType = UtilitiesClass.getRandomRoomType();
            }
            
            const room = new Room(0, i, roomType);
            this.rooms.push(room);
        }
    }
}