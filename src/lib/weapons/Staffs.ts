import { Weapon } from "./Weapons";

export class Staff extends Weapon {
    constructor(name: string, price: number, attack: number, durability: number) {
        super(name, price, attack, durability);
    }

    // TODO: Implement Staff specific methods
}