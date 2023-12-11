import { BiomeInterface } from "./Biomes";
import { DifficultyEnum } from "../utilityTypes";

export interface WorldInterface {
    name: string;
    biomes: BiomeInterface[];
    difficulty: typeof DifficultyEnum;
    entropy: number;
    setBaseEntropy(): number;
    setIncreasedEntropy(): void;
    setDecreasedEntropy(): void;
    getGameEntropyBasedOnDifficulty(): number;
    getName(): string;
    getDifficulty(): string;
}