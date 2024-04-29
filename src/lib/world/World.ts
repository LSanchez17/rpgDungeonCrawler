import { WorldInterface, BiomeInterface } from "../../types/worldTypes";
import { DifficultyEnum } from "../../types/utilityTypes";

export class World implements WorldInterface {
    name: string;
    biomes: BiomeInterface[];
    difficulty: DifficultyEnum;
    entropy: number;

    constructor(name: string, biomes: BiomeInterface[], difficulty: DifficultyEnum) {
        this.name = name;
        this.biomes = biomes;
        this.difficulty = difficulty;
        this.entropy = this.setBaseEntropy();
    }

    /**
     * We want to set the base entropy of the world to be the difficulty of the world. 
     * This will be the minimum entropy of the world.
     * 
     * @returns number
     */
    setBaseEntropy() {  
        return this.getGameEntropyBasedOnDifficulty();
    }

    /**
     * We want to increase the entropy of the world whenever good things happen to the player. 
     * This will make the game more difficult over time.
     */ 
    setIncreasedEntropy() {
        this.entropy++;
    }

    /**
     * We want to decrease the entropy of the world whenever too many bad things happen to the player.
     * This will make the game easier over time if the player is struggling a lot, but never below the base difficulty.
     */
    setDecreasedEntropy() {
        this.entropy--;
        if (this.entropy < this.getGameEntropyBasedOnDifficulty()) {
            this.entropy = this.getGameEntropyBasedOnDifficulty();
        }
    }

    /**
     * Determine a base level of entropy based on initial difficulty
     */
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

    /**
     * Get the name of the world
     */
    getName() {
        return this.name;
    }

    /**
     * Get the difficulty of the world
     */
    getDifficulty() {
        return this.difficulty;
    }
}