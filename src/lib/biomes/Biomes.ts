import { BiomeInterface } from "../../types";

export class Biomes implements BiomeInterface {
    name: string;
    description: string;
    baseDifficultyModifier: number;

    constructor(name: string, description: string, baseDifficultyModifier: number) {
        this.name = name;
        this.description = description;
        this.baseDifficultyModifier = baseDifficultyModifier;
    }

    generateBaseBiomes(): BiomeInterface[] {
        return [
            new Biomes('Plains', 'A wide open field with tall grass and flowers', 1),
            new Biomes('Forest', 'A dense forest with tall trees and thick underbrush', 2),
            new Biomes('Desert', 'A vast desert with sand dunes and scorching heat', 3),
            ];
        }

    addNewBiome(name: string, description: string, baseDifficultyModifier: number): BiomeInterface {
        return new Biomes(name, description, baseDifficultyModifier);
    }

    getBiomeByName(name: string): BiomeInterface {
        return this.generateBaseBiomes().find(biome => biome.name === name);
    }
}