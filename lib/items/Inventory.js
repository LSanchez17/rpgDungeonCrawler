// create a class for managing inventory of various items
class Inventory {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter(i => i.name !== item.name);
    }
    getItems() {
        return this.items;
    }
}

export default Inventory;