// create a class to manage the base monster 

class Monster {
    constructor(name, health, attack, defense, speed, exp, gold) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.exp = exp;
        this.gold = gold;
    }
}

export default Monster;