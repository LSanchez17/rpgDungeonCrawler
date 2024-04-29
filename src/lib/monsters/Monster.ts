import { MonsterInterface } from "../../types/characterTypes";

export class Monster implements MonsterInterface{
    name: string;
    health: number;
    attack: number;
    defense: number;
    speed: number;
    exp: number;
    gold: number;
    tile: string;

    constructor(name, health, attack, defense, speed, exp, gold) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.exp = exp;
        this.gold = gold;
    }

    /**
     * Increase a monster's speed
     */
    increaseSpeed(speedAmount: number) {
        this.speed += speedAmount;
    }

    /**
     * Decrease a monster's speed
     */
    decreaseSpeed(speedAmount: number) {
        this.speed -= speedAmount;  
    }

    /**
     * Increase a monster's attack
     */
    increaseAttack(attackAmount: number) {
        this.attack += attackAmount;
    }

    /**
     * Decrease a monster's attack
     */
    decreaseAttack(attackAmount: number) {
        this.attack -= attackAmount;
    }

    /**
     * Increase a monster's defense
     */
    increaseDefense(defenseAmount: number) {
        this.defense += defenseAmount;
    }

    /**
     * Decrease a monster's defense
     */
    decreaseDefense(defenseAmount: number) {
        this.defense -= defenseAmount;
    }

    /**
     * Increase a monster's health
     */
    increaseHealth(healthAmount: number) {
        this.health += healthAmount;
    }

    /**
     * Decrease a monster's health
     */
    decreaseHealth(healthAmount: number) {
        this.health -= healthAmount;
    }

    /**
     * Increase a monster's exp
     */
    increaseExp(expAmount: number) {
        this.exp += expAmount;
    }

    /**
     * Decrease a monster's exp
     */
    decreaseExp(expAmount: number) {
        this.exp -= expAmount;
    }

    /**
     * Increase a monster's gold
     */
    increaseGold(goldAmount: number) {
        this.gold += goldAmount;
    }

    /**
     * Decrease a monster's gold
     */
    decreaseGold(goldAmount: number) {
        this.gold -= goldAmount;
    }
}