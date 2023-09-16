// Create a class for managing the layout of the dungeon
class Dungeon {
    constructor() {
        this.rooms = [];
    }
    addRoom(room) {
        this.rooms.push(room);
    }
    getRooms() {
        return this.rooms;
    }
}

export default Dungeon;