// create a class to manage the base monster 
// This should incorporate an auto generation feature
// auto generate a set of basic, miniboss, and boss monsters during world and dungeon creation
// Incorporate some LLM stuff for more variety

export class Monster {
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
     * 
     * @param {number} speedAmount number
     */
    increaseSpeed(speedAmount) {
        this.speed += speedAmount;
    }

    /**
     * Decrease a monster's speed
     * 
     * @param {number} speedAmount number
     */
    decreaseSpeed(speedAmount) {
        this.speed -= speedAmount;  
    }

    /**
     * Increase a monster's attack
     * 
     * @param {number} attackAmount number
     */
    increaseAttack(attackAmount) {
        this.attack += attackAmount;
    }

    /**
     * Decrease a monster's attack
     * 
     * @param {number} attackAmount number
     */
    decreaseAttack(attackAmount) {
        this.attack -= attackAmount;
    }

    /**
     * Increase a monster's defense
     * 
     * @param {number} defenseAmount number
     */
    increaseDefense(defenseAmount) {
        this.defense += defenseAmount;
    }

    /**
     * Decrease a monster's defense
     * 
     * @param {number} defenseAmount number
     */
    decreaseDefense(defenseAmount) {
        this.defense -= defenseAmount;
    }

    /**
     * Increase a monster's health
     * 
     * @param {number} healthAmount number
     */
    increaseHealth(healthAmount) {
        this.health += healthAmount;
    }

    /**
     * Decrease a monster's health
     * 
     * @param {number} healthAmount number
     */
    decreaseHealth(healthAmount) {
        this.health -= healthAmount;
    }

    /**
     * Increase a monster's exp
     * 
     * @param {number} expAmount number
     */
    increaseExp(expAmount) {
        this.exp += expAmount;
    }

    /**
     * Decrease a monster's exp
     * 
     * @param {number} expAmount number
     */
    decreaseExp(expAmount) {
        this.exp -= expAmount;
    }

    /**
     * Increase a monster's gold
     * 
     * @param {number} goldAmount number
     */
    increaseGold(goldAmount) {
        this.gold += goldAmount;
    }

    /**
     * Decrease a monster's gold
     * 
     * @param {number} goldAmount number
     */
    decreaseGold(goldAmount) {
        this.gold -= goldAmount;
    }
}