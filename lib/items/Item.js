const { Utilities } = require('./utilities/Utilities');

class Item {
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
            statCategory: Utilities.getRandomStatCategory(), 
            value: Math.random() * 100
        });
    }

}

export default Item;
