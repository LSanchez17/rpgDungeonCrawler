import { Weapon } from "./Weapons";

export class Bow extends Weapon {
    constructor(name: string, price: number, attack: number, durability: number) {
        super(name, price, attack, durability);
    }

    // TODO: Implement Bow specific methods
}