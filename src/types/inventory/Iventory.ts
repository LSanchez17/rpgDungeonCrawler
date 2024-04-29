import { ItemInterface } from "../itemTypes";

/** Represents the inventory of any given character */
export interface InventoryInterface {
    /** Items in the inventory */
    items: ItemInterface[];
    /** Add an item to the inventory */
    addItem(item: ItemInterface): void;
    /** Remove an item from the inventory */
    removeItem(item: ItemInterface): void;
    /** Get all items a player currently has in their inventory */
    getItems(): ItemInterface[];
}