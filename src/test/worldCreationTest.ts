import { WorldCreator } from "../lib/world/WorldCreator";
import { DifficultyEnum } from "../types/utilityTypes";
import { createWorld, getWorldCreationRecommendations } from "../gameLoop/world/worldCreation";

/**
 * Simple test script to demonstrate the World Creation Library functionality
 */
export const testWorldCreation = () => {
    console.log("=== World Creation Library Test ===\n");

    // Test 1: Create a WorldCreator instance and generate a basic world
    console.log("Test 1: Basic World Generation");
    const worldCreator = new WorldCreator();
    
    const basicWorld = worldCreator.generateWorld({
        name: "Test World",
        difficulty: DifficultyEnum.Easy,
        width: 20,
        height: 20
    });
    
    console.log(`Generated world: ${basicWorld.width}x${basicWorld.height}`);
    console.log(`Terrain features: ${basicWorld.terrainFeatures.length}`);
    console.log(`Structures: ${basicWorld.structures.length}`);
    console.log(`Dungeon entrances: ${basicWorld.dungeonEntrances.length}\n`);

    // Test 2: Use the factory function with recommendations
    console.log("Test 2: World Creation with Recommendations");
    const recommendations = getWorldCreationRecommendations(DifficultyEnum.Medium);
    const createdWorld = createWorld("Recommended World", DifficultyEnum.Medium, recommendations);
    
    console.log(`Generated world: ${createdWorld.world.getName()}`);
    console.log(`Difficulty: ${createdWorld.world.getDifficulty()}`);
    console.log(`World size: ${createdWorld.worldMap.width}x${createdWorld.worldMap.height}`);
    console.log(`Generation time: ${createdWorld.metadata.generationTime}ms\n`);

    // Test 3: Generate terrain and structures separately
    console.log("Test 3: Individual Component Generation");
    const terrain = worldCreator.generateTerrain(30, 30, 0.5);
    console.log(`Generated terrain features: ${terrain.length}`);
    
    if (terrain.length > 0) {
        console.log(`Sample terrain: ${terrain[0].type} at (${terrain[0].x}, ${terrain[0].y})`);
    }

    // Test 4: Test different difficulty levels
    console.log("\nTest 4: Different Difficulty Levels");
    const difficulties = [DifficultyEnum.Easy, DifficultyEnum.Medium, DifficultyEnum.Hard, DifficultyEnum.Legendary];
    
    difficulties.forEach(difficulty => {
        const world = worldCreator.generateWorld({
            name: `${difficulty} World`,
            difficulty
        });
        console.log(`${difficulty}: ${world.width}x${world.height}, ${world.structures.length} structures, ${world.dungeonEntrances.length} dungeons`);
    });

    console.log("\n=== World Creation Library Test Complete ===");
};

// Export individual functions for specific testing
export { WorldCreator, createWorld, getWorldCreationRecommendations };