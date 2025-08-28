import { WorldCreatorInterface, WorldCreationOptions, WorldMap, TerrainFeature, Structure, Environment } from "../../types/worldTypes/WorldCreation";
import { BiomeInterface } from "../../types/worldTypes/Biomes";
import { DifficultyEnum } from "../../types/utilityTypes";
import { Biomes } from "../biomes/Biomes";
import { UtilitiesClass } from "../utilities/Utilities";

export class WorldCreator implements WorldCreatorInterface {
    private biomeGenerator: Biomes;

    constructor() {
        this.biomeGenerator = new Biomes("", "", 0);
    }

    generateWorld(options: WorldCreationOptions): WorldMap {
        const {
            name,
            difficulty,
            width = this.getWorldSizeByDifficulty(difficulty).width,
            height = this.getWorldSizeByDifficulty(difficulty).height,
            biomeDistribution = this.getDefaultBiomeDistribution(),
            structureDensity = this.getStructureDensityByDifficulty(difficulty),
            terrainComplexity = this.getTerrainComplexityByDifficulty(difficulty),
            environmentVariation = this.getEnvironmentVariationByDifficulty(difficulty)
        } = options;

        // Create the world map structure
        const worldMap: WorldMap = {
            width,
            height,
            biomes: this.distributeBiomes(width, height, biomeDistribution),
            terrainFeatures: this.generateTerrain(width, height, terrainComplexity),
            structures: [],
            dungeonEntrances: []
        };

        // Generate structures and place them on the map
        worldMap.structures = this.generateStructures(worldMap, structureDensity);
        
        // Place dungeon entrances strategically
        const dungeonCount = this.getDungeonCountByDifficulty(difficulty);
        this.placeDungeonEntrances(worldMap, dungeonCount);

        return worldMap;
    }

    generateTerrain(width: number, height: number, complexity: number): TerrainFeature[] {
        const terrainFeatures: TerrainFeature[] = [];
        const featureCount = Math.floor((width * height) * complexity * 0.1);

        const terrainTypes = [
            'mountain', 'hill', 'valley', 'river', 'lake', 'cliff', 
            'canyon', 'plateau', 'cave', 'spring', 'boulder', 'ravine'
        ];

        for (let i = 0; i < featureCount; i++) {
            const feature: TerrainFeature = {
                type: terrainTypes[UtilitiesClass.getRandomInt(terrainTypes.length)],
                x: UtilitiesClass.getRandomInt(width),
                y: UtilitiesClass.getRandomInt(height),
                properties: this.generateTerrainProperties()
            };
            terrainFeatures.push(feature);
        }

        return terrainFeatures;
    }

    generateStructures(map: WorldMap, density: number): Structure[] {
        const structures: Structure[] = [];
        const structureCount = Math.floor((map.width * map.height) * density * 0.05);

        const structureTypes = [
            'village', 'tower', 'ruins', 'shrine', 'outpost', 'bridge',
            'windmill', 'fortress', 'temple', 'monument', 'camp', 'waypoint'
        ];

        for (let i = 0; i < structureCount; i++) {
            const structureType = structureTypes[UtilitiesClass.getRandomInt(structureTypes.length)];
            const size = this.getStructureSize(structureType);
            
            const structure: Structure = {
                name: `${structureType}_${i + 1}`,
                type: structureType,
                x: UtilitiesClass.getRandomInt(map.width - size.width),
                y: UtilitiesClass.getRandomInt(map.height - size.height),
                width: size.width,
                height: size.height,
                properties: this.generateStructureProperties(structureType)
            };
            structures.push(structure);
        }

        return structures;
    }

    generateEnvironments(map: WorldMap, variation: number): Environment[] {
        const environments: Environment[] = [];
        const environmentCount = Math.ceil(variation * 10);

        const weatherTypes = ['clear', 'cloudy', 'rainy', 'stormy', 'foggy', 'snowy', 'windy'];
        const effects = ['none', 'magical_aura', 'cursed', 'blessed', 'ancient_power', 'unstable_magic'];

        for (let i = 0; i < environmentCount; i++) {
            const environment: Environment = {
                weather: weatherTypes[UtilitiesClass.getRandomInt(weatherTypes.length)],
                temperature: UtilitiesClass.getRandomInt(50) - 10, // -10 to 40 degrees
                humidity: UtilitiesClass.getRandomInt(100),
                visibility: UtilitiesClass.getRandomInt(100) + 1, // 1 to 100%
                effects: this.generateEnvironmentEffects(effects, variation)
            };
            environments.push(environment);
        }

        return environments;
    }

    distributeBiomes(width: number, height: number, distribution: Record<string, number>): BiomeInterface[][] {
        const biomeMap: BiomeInterface[][] = [];
        const availableBiomes = this.biomeGenerator.generateBaseBiomes();
        
        // Initialize the 2D array
        for (let x = 0; x < width; x++) {
            biomeMap[x] = [];
            for (let y = 0; y < height; y++) {
                biomeMap[x][y] = this.selectBiomeByDistribution(availableBiomes, distribution);
            }
        }

        // Apply biome clustering for more realistic distribution
        return this.applyBiomeClustering(biomeMap, width, height);
    }

    placeDungeonEntrances(map: WorldMap, count: number): void {
        for (let i = 0; i < count; i++) {
            // Avoid placing dungeons too close to structures or other dungeons
            let attempts = 0;
            let validPlacement = false;
            
            while (!validPlacement && attempts < 50) {
                const x = UtilitiesClass.getRandomInt(map.width);
                const y = UtilitiesClass.getRandomInt(map.height);
                
                if (this.isValidDungeonPlacement(map, x, y)) {
                    map.dungeonEntrances.push({
                        x,
                        y,
                        dungeonId: `dungeon_${i + 1}`
                    });
                    validPlacement = true;
                }
                attempts++;
            }
        }
    }

    // Helper methods
    private getWorldSizeByDifficulty(difficulty: DifficultyEnum): { width: number; height: number } {
        switch (difficulty) {
            case DifficultyEnum.Easy:
                return { width: 50, height: 50 };
            case DifficultyEnum.Medium:
                return { width: 75, height: 75 };
            case DifficultyEnum.Hard:
                return { width: 100, height: 100 };
            case DifficultyEnum.Legendary:
                return { width: 150, height: 150 };
            default:
                return { width: 50, height: 50 };
        }
    }

    private getDefaultBiomeDistribution(): Record<string, number> {
        return {
            'Plains': 0.4,
            'Forest': 0.35,
            'Desert': 0.25
        };
    }

    private getStructureDensityByDifficulty(difficulty: DifficultyEnum): number {
        switch (difficulty) {
            case DifficultyEnum.Easy:
                return 0.8;
            case DifficultyEnum.Medium:
                return 1.0;
            case DifficultyEnum.Hard:
                return 1.2;
            case DifficultyEnum.Legendary:
                return 1.5;
            default:
                return 1.0;
        }
    }

    private getTerrainComplexityByDifficulty(difficulty: DifficultyEnum): number {
        switch (difficulty) {
            case DifficultyEnum.Easy:
                return 0.3;
            case DifficultyEnum.Medium:
                return 0.5;
            case DifficultyEnum.Hard:
                return 0.7;
            case DifficultyEnum.Legendary:
                return 1.0;
            default:
                return 0.5;
        }
    }

    private getEnvironmentVariationByDifficulty(difficulty: DifficultyEnum): number {
        switch (difficulty) {
            case DifficultyEnum.Easy:
                return 0.3;
            case DifficultyEnum.Medium:
                return 0.5;
            case DifficultyEnum.Hard:
                return 0.7;
            case DifficultyEnum.Legendary:
                return 1.0;
            default:
                return 0.5;
        }
    }

    private getDungeonCountByDifficulty(difficulty: DifficultyEnum): number {
        switch (difficulty) {
            case DifficultyEnum.Easy:
                return 3;
            case DifficultyEnum.Medium:
                return 5;
            case DifficultyEnum.Hard:
                return 7;
            case DifficultyEnum.Legendary:
                return 10;
            default:
                return 3;
        }
    }

    private generateTerrainProperties(): Record<string, any> {
        return {
            elevation: UtilitiesClass.getRandomInt(1000),
            traversable: UtilitiesClass.getRandomInt(100) > 20,
            resources: UtilitiesClass.getRandomInt(100) > 70 ? ['stone', 'wood', 'water'][UtilitiesClass.getRandomInt(3)] : null,
            hazardous: UtilitiesClass.getRandomInt(100) > 85
        };
    }

    private getStructureSize(structureType: string): { width: number; height: number } {
        const sizes: Record<string, { width: number; height: number }> = {
            'village': { width: 8, height: 8 },
            'tower': { width: 3, height: 3 },
            'ruins': { width: 5, height: 5 },
            'shrine': { width: 2, height: 2 },
            'outpost': { width: 4, height: 4 },
            'bridge': { width: 1, height: 6 },
            'windmill': { width: 3, height: 3 },
            'fortress': { width: 10, height: 10 },
            'temple': { width: 6, height: 6 },
            'monument': { width: 2, height: 2 },
            'camp': { width: 4, height: 4 },
            'waypoint': { width: 1, height: 1 }
        };
        return sizes[structureType] || { width: 3, height: 3 };
    }

    private generateStructureProperties(structureType: string): Record<string, any> {
        const baseProperties = {
            accessible: true,
            condition: ['excellent', 'good', 'fair', 'poor', 'ruined'][UtilitiesClass.getRandomInt(5)],
            population: structureType === 'village' ? UtilitiesClass.getRandomInt(100) + 10 : 0
        };

        switch (structureType) {
            case 'village':
                return {
                    ...baseProperties,
                    services: ['inn', 'shop', 'blacksmith', 'temple'].filter(() => UtilitiesClass.getRandomInt(100) > 60),
                    defenses: UtilitiesClass.getRandomInt(100) > 70
                };
            case 'fortress':
                return {
                    ...baseProperties,
                    garrison: UtilitiesClass.getRandomInt(50) + 10,
                    defenseRating: UtilitiesClass.getRandomInt(10) + 5
                };
            case 'temple':
                return {
                    ...baseProperties,
                    deity: ['Light', 'Shadow', 'Nature', 'War', 'Knowledge'][UtilitiesClass.getRandomInt(5)],
                    blessing: UtilitiesClass.getRandomInt(100) > 50
                };
            default:
                return baseProperties;
        }
    }

    private generateEnvironmentEffects(effects: string[], variation: number): string[] {
        const numEffects = Math.floor(variation * 3);
        const selectedEffects: string[] = [];
        
        for (let i = 0; i < numEffects; i++) {
            const effect = effects[UtilitiesClass.getRandomInt(effects.length)];
            // Check if effect is already in selectedEffects
            let alreadyExists = false;
            for (let j = 0; j < selectedEffects.length; j++) {
                if (selectedEffects[j] === effect) {
                    alreadyExists = true;
                    break;
                }
            }
            if (!alreadyExists) {
                selectedEffects.push(effect);
            }
        }
        
        return selectedEffects.length > 0 ? selectedEffects : ['none'];
    }

    private selectBiomeByDistribution(biomes: BiomeInterface[], distribution: Record<string, number>): BiomeInterface {
        const random = Math.random();
        let cumulative = 0;
        
        for (let i = 0; i < biomes.length; i++) {
            const biome = biomes[i];
            cumulative += distribution[biome.name] || 0;
            if (random <= cumulative) {
                return biome;
            }
        }
        
        return biomes[0]; // Fallback to first biome
    }

    private applyBiomeClustering(biomeMap: BiomeInterface[][], width: number, height: number): BiomeInterface[][] {
        // Simple clustering algorithm to make biomes more realistic
        const clusteredMap = [...biomeMap];
        
        for (let x = 1; x < width - 1; x++) {
            for (let y = 1; y < height - 1; y++) {
                const neighbors = [
                    biomeMap[x-1][y], biomeMap[x+1][y],
                    biomeMap[x][y-1], biomeMap[x][y+1]
                ];
                
                const biomeCount: Record<string, number> = {};
                neighbors.forEach(biome => {
                    biomeCount[biome.name] = (biomeCount[biome.name] || 0) + 1;
                });
                
                const dominantBiome = Object.keys(biomeCount).reduce((a, b) => 
                    biomeCount[a] > biomeCount[b] ? a : b
                );
                
                // 30% chance to change to dominant neighbor biome for clustering
                if (UtilitiesClass.getRandomInt(100) < 30) {
                    // Find biome with dominant name
                    let matchingBiome: BiomeInterface | undefined;
                    for (let k = 0; k < neighbors.length; k++) {
                        if (neighbors[k].name === dominantBiome) {
                            matchingBiome = neighbors[k];
                            break;
                        }
                    }
                    if (matchingBiome) {
                        clusteredMap[x][y] = matchingBiome;
                    }
                }
            }
        }
        
        return clusteredMap;
    }

    private isValidDungeonPlacement(map: WorldMap, x: number, y: number): boolean {
        const minDistanceFromStructure = 5;
        const minDistanceFromOtherDungeon = 10;
        
        // Check distance from structures
        for (const structure of map.structures) {
            const distance = Math.sqrt(
                Math.pow(x - structure.x, 2) + Math.pow(y - structure.y, 2)
            );
            if (distance < minDistanceFromStructure) {
                return false;
            }
        }
        
        // Check distance from other dungeons
        for (const entrance of map.dungeonEntrances) {
            const distance = Math.sqrt(
                Math.pow(x - entrance.x, 2) + Math.pow(y - entrance.y, 2)
            );
            if (distance < minDistanceFromOtherDungeon) {
                return false;
            }
        }
        
        return true;
    }
}