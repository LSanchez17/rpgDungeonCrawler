import { BiomeInterface } from "./Biomes";
import { DifficultyEnum } from "../utilityTypes";

export interface WorldInterface {
    /** The name of the world */
    name: string;
    /** The difficulty of the world */
    difficulty: DifficultyEnum;
    /** The entropy in the world */
    entropy: number;
    /** Sets the starting Entropy level-Based on world difficulty */
    setBaseEntropy(): number;
    /** Increases entropy */
    setIncreasedEntropy(): void;
    /** Decreases entropy */
    setDecreasedEntropy(): void;
    /** Returns the game entropy based on the difficulty- */
    getGameEntropyBasedOnDifficulty(): number;
    /** Returns the name of the world */
    getName(): string;
    /** Returns the difficulty of the world */
    getDifficulty(): string;
}