export interface MonsterInterface {
    name: string;
    health: number;
    attack: number;
    defense: number;
    speed: number;
    exp: number;
    gold: number;
    tile: string;
    increaseHealth(health: number): void;
    decreaseHealth(health: number): void;
    increaseAttack(attack: number): void;
    decreaseAttack(attack: number): void;
    increaseDefense(defense: number): void;
    decreaseDefense(defense: number): void;
    increaseSpeed(speed: number): void;
    decreaseSpeed(speed: number): void;
}