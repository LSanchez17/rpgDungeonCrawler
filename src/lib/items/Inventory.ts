// create a class for managing inventory of various items
export class Inventory {
    constructor() {
        this.items = [];
    }


    /**
     * Add an item to the inventory
     * 
     * @param {Item} item class instance to add
     */
    addItem(item) {
        this.items.push(item);
    }


    /**
     * Remove an item from the inventory
     * 
     * @param {Item} item class instance to remove
     */
    removeItem(item) {
        this.items = this.items.filter(i => i.name !== item.name);
    }

    /**
     * Get all items a player currently has in their inventory
     * 
     * @returns {Array} items in inventory
     */
    getItems() {
        return this.items;
    }
}