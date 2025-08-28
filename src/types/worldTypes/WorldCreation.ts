import { BiomeInterface } from "./Biomes";
import { DifficultyEnum } from "../utilityTypes";

export interface TerrainFeature {
    type: string;
    x: number;
    y: number;
    properties: Record<string, any>;
}

export interface Structure {
    name: string;
    type: string;
    x: number;
    y: number;
    width: number;
    height: number;
    properties: Record<string, any>;
}

export interface Environment {
    weather: string;
    temperature: number;
    humidity: number;
    visibility: number;
    effects: string[];
}

export interface WorldMap {
    width: number;
    height: number;
    biomes: BiomeInterface[][];
    terrainFeatures: TerrainFeature[];
    structures: Structure[];
    dungeonEntrances: Array<{ x: number; y: number; dungeonId: string }>;
}

export interface WorldCreationOptions {
    name: string;
    difficulty: DifficultyEnum;
    width?: number;
    height?: number;
    biomeDistribution?: Record<string, number>;
    structureDensity?: number;
    terrainComplexity?: number;
    environmentVariation?: number;
}

export interface WorldCreatorInterface {
    /** Generate a complete world with terrain, biomes, structures and environments */
    generateWorld(options: WorldCreationOptions): WorldMap;
    /** Generate terrain features for a given area */
    generateTerrain(width: number, height: number, complexity: number): TerrainFeature[];
    /** Generate and place structures across the world */
    generateStructures(map: WorldMap, density: number): Structure[];
    /** Create environmental conditions for different areas */
    generateEnvironments(map: WorldMap, variation: number): Environment[];
    /** Procedurally distribute biomes across the world map */
    distributeBiomes(width: number, height: number, distribution: Record<string, number>): BiomeInterface[][];
    /** Place dungeon entrances strategically across the world */
    placeDungeonEntrances(map: WorldMap, count: number): void;
}