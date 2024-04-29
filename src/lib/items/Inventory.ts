import { ItemInterface } from "../../types";
import { InventoryInterface } from "../../types/inventory/Iventory";

export class Inventory implements InventoryInterface{
    items: ItemInterface[];

    constructor() {
        this.items = [];
    }


    /**
     * Add an item to the inventory
     * 
     * @param {Item} item class instance to add
     */
    addItem(item: ItemInterface) {
        this.items.push(item);
    }


    /**
     * Remove an item from the inventory
     * 
     * @param {Item} item class instance to remove
     */
    removeItem(item: ItemInterface) {
        this.items = this.items.filter(i => i.name !== item.name);
    }

    /**
     * Get all items a player currently has in their inventory
     * 
     * @returns {Array} items in inventory
     */
    getItems(): Array<ItemInterface> {
        return this.items;
    }
}