import { Weapon } from "./Weapons";

export class Sword extends Weapon {
    constructor(name: string, price: number, attack: number, durability: number) {
        super(name, price, attack, durability);
    }

    // TODO: Implement Sword specific methods
}