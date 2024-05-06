import { WorldInterface } from "../../types/worldTypes";
import { DifficultyEnum } from "../../types/utilityTypes";

export class World implements WorldInterface {
    name: string;
    difficulty: DifficultyEnum;
    entropy: number;

    constructor(name: string, difficulty: DifficultyEnum) {
        this.name = name;
        this.difficulty = difficulty;
        this.entropy = this.setBaseEntropy();
    }

    setBaseEntropy() {  
        return this.getGameEntropyBasedOnDifficulty();
    }

    setIncreasedEntropy() {
        this.entropy++;
    }

    setDecreasedEntropy() {
        this.entropy--;
        if (this.entropy < this.getGameEntropyBasedOnDifficulty()) {
            this.entropy = this.getGameEntropyBasedOnDifficulty();
        }
    }

    getGameEntropyBasedOnDifficulty() {
        switch(this.difficulty) {
            case DifficultyEnum.Easy:
                return 20;
            case DifficultyEnum.Medium:
                return 30;
            case DifficultyEnum.Hard:
                return 40;
            case DifficultyEnum.Legendary:
                return 50;
            default:
                return 20;
        }
    }

    getName() {
        return this.name;
    }

    getDifficulty() {
        return this.difficulty;
    }
}