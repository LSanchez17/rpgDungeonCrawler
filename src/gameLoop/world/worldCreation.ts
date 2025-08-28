import { World } from "../../lib/world/World";
import { WorldCreator } from "../../lib/world/WorldCreator";
import { WorldCreationOptions, WorldMap } from "../../types/worldTypes/WorldCreation";
import { DifficultyEnum } from "../../types/utilityTypes";

export interface CreatedWorld {
    world: World;
    worldMap: WorldMap;
    metadata: {
        generationTime: number;
        seed?: string;
        version: string;
    };
}

/**
 * Factory function to create a complete world with all associated data
 */
export const createWorld = (name: string, difficulty: DifficultyEnum, options?: Partial<WorldCreationOptions>): CreatedWorld => {
    const startTime = Date.now();
    
    // Create the base world instance
    const world = new World(name, difficulty);
    
    // Create the world creator and generate the world map
    const worldCreator = new WorldCreator();
    
    const worldCreationOptions: WorldCreationOptions = {
        name,
        difficulty,
        ...options
    };
    
    const worldMap = worldCreator.generateWorld(worldCreationOptions);
    
    const generationTime = Date.now() - startTime;
    
    return {
        world,
        worldMap,
        metadata: {
            generationTime,
            version: '1.0.0'
        }
    };
};

/**
 * Utility function to get world creation recommendations based on difficulty
 */
export const getWorldCreationRecommendations = (difficulty: DifficultyEnum): Partial<WorldCreationOptions> => {
    switch (difficulty) {
        case DifficultyEnum.Easy:
            return {
                width: 40,
                height: 40,
                structureDensity: 1.2,
                terrainComplexity: 0.3,
                environmentVariation: 0.2,
                biomeDistribution: {
                    'Plains': 0.6,
                    'Forest': 0.3,
                    'Desert': 0.1
                }
            };
        case DifficultyEnum.Medium:
            return {
                width: 60,
                height: 60,
                structureDensity: 1.0,
                terrainComplexity: 0.5,
                environmentVariation: 0.4,
                biomeDistribution: {
                    'Plains': 0.4,
                    'Forest': 0.4,
                    'Desert': 0.2
                }
            };
        case DifficultyEnum.Hard:
            return {
                width: 80,
                height: 80,
                structureDensity: 0.8,
                terrainComplexity: 0.7,
                environmentVariation: 0.6,
                biomeDistribution: {
                    'Plains': 0.3,
                    'Forest': 0.3,
                    'Desert': 0.4
                }
            };
        case DifficultyEnum.Legendary:
            return {
                width: 120,
                height: 120,
                structureDensity: 0.6,
                terrainComplexity: 1.0,
                environmentVariation: 0.8,
                biomeDistribution: {
                    'Plains': 0.2,
                    'Forest': 0.3,
                    'Desert': 0.5
                }
            };
        default:
            return {};
    }
};