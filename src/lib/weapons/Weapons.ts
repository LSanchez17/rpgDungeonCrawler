// create a class for weapons
export class Weapon {
    constructor(name, price, attack, durability) {
        this.name = name;
        this.price = price;
        this.attack = attack;
        this.durability = durability;
    }

    /**
     * Creates a discount for characters to buy weapons for less gold
     * 
     * @param {number} characterDiscount number
     */
    setDiscount(characterDiscount) {
        this.price = Math.round(this.price * characterDiscount);
    }

    /**
     * Creates a boost for characters to attack with more power
     * Can come from 
     * 
     * @param {number} characterAttackBoost number
     */
    setAttackBoost(characterAttackBoost) {
        this.attack = Math.round(this.attack * characterAttackBoost);
    }

    /**
     * Weapon attacks decrease druability
     */
    damageWeapon() {
        this.durability -= 1;
    }

    /**
     * Allows characters to repair weapons
     * 
     * @param {number} repairPercentage number
     */
    repairWeapon(repairPercentage) {
        this.durability = Math.round(this.durability * repairPercentage);
    }

    /**
     * Some monsters can decrease attack power of weapons
     * 
     * @param {number} characterAttackDecrease number
     */
    setAttackDecrease(characterAttackDecrease) {
        this.attack = Math.round(this.attack * characterAttackDecrease);
    }

    /**
     * Some curses or shopKeepers are rude and increase the price of weapons
     */
    setPremiumPrice() {
        this.price = Math.round(this.price * 1.5);
    }   
}