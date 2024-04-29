import { ItemInterface } from "../../types";
import { UtilitiesClass } from "../utilities/Utilities";
// Incorporate similar mechanisms for items, in terms of generation at runtime

export class Item implements ItemInterface{
    name: string;
    price: number;
    type: string;
    tile: string;
    hiddenAttribute: { statCategory: string, value: number };

    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.hiddenAttribute = this.generateHiddenAttribute();
    }

    /**
     * Creates a hidden attribute for items to boost player stats, bit random for fun
     */
    generateHiddenAttribute() {
        return ({ 
            statCategory: UtilitiesClass.getRandomStatCategory(), 
            value: Math.random() * 100
        });
    }

    /** Sets the base attributes of this item based on it's type */
    setBaseAttributes(): void {
        // TODO: Implement. Take intoa account difficulty
    }
}