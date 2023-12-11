import { WeaponInterface } from "../../types/weaponTypes";

export class Weapon implements WeaponInterface{
    name: string;
    price: number;
    attack: number;
    durability: number;

    constructor(name: string, price: number, attack: number, durability: number) {
        this.name = name;
        this.price = price;
        this.attack = attack;
        this.durability = durability;
    }

    /**
     * Creates a discount for characters to buy weapons for less gold
     */
    setDiscount(characterDiscount: number | undefined) {
        if (characterDiscount) {
            this.price = Math.round(this.price * characterDiscount);
        }
    }

    /**
     * Creates a boost for characters to attack with more power Can come from 
     */
    setAttackBoost(characterAttackBoost: number | undefined) {
        if (characterAttackBoost) {
            this.attack = Math.round(this.attack * characterAttackBoost);
        }
    }

    /**
     * Weapon attacks decrease druability
     */
    damageWeapon() {
        this.durability -= 1;
        // if weaponDurability is 0, weapon is broken
        // TODO: Implement weapon breakage
    }

    /**
     * Allows characters to repair weapons
     */
    repairWeapon(repairPercentage: number) {
        this.durability = Math.round(this.durability * repairPercentage);
    }

    /**
     * Some monsters can decrease attack power of weapons
     */
    setAttackDecrease(characterAttackDecrease: number) {
        this.attack = Math.round(this.attack * characterAttackDecrease);
    }

    /**
     * Some curses or shopKeepers are rude and increase the price of weapons
     */
    setPremiumPrice() {
        this.price = Math.round(this.price * 1.5);
    }   
}