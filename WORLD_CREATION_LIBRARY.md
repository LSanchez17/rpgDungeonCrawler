# World Creation Library

The World Creation Library provides comprehensive world generation capabilities for the RPG Dungeon Crawler project. It enables procedural generation of terrain, environments, structures, and biomes while integrating seamlessly with the existing game systems.

## Features

### Core Components

1. **WorldCreator Class** - The main orchestrator for world generation
2. **World Creation Factory** - High-level interface for creating complete worlds
3. **Type Definitions** - Comprehensive interfaces for world components

### Capabilities

- **Terrain Generation**: Procedurally generates terrain features like mountains, rivers, caves, etc.
- **Structure Placement**: Intelligently places villages, towers, ruins, and other structures
- **Biome Distribution**: Creates realistic biome clustering with configurable distribution
- **Environment Creation**: Generates dynamic weather and environmental conditions
- **Dungeon Integration**: Places dungeon entrances strategically across the world
- **Difficulty Scaling**: Adjusts world complexity based on difficulty settings

## Usage

### Basic World Generation

```typescript
import { WorldCreator } from "../lib/world/WorldCreator";
import { DifficultyEnum } from "../types/utilityTypes";

const worldCreator = new WorldCreator();

const world = worldCreator.generateWorld({
    name: "My World",
    difficulty: DifficultyEnum.Medium,
    width: 50,
    height: 50
});
```

### Factory Function (Recommended)

```typescript
import { createWorld, getWorldCreationRecommendations } from "../gameLoop/world/worldCreation";
import { DifficultyEnum } from "../types/utilityTypes";

// Get recommended settings for difficulty
const options = getWorldCreationRecommendations(DifficultyEnum.Hard);

// Create world with metadata
const createdWorld = createWorld("Adventure World", DifficultyEnum.Hard, options);

console.log(`World: ${createdWorld.world.getName()}`);
console.log(`Generation time: ${createdWorld.metadata.generationTime}ms`);
```

### Individual Component Generation

```typescript
const worldCreator = new WorldCreator();

// Generate terrain features
const terrain = worldCreator.generateTerrain(100, 100, 0.7);

// Generate structures for a map
const structures = worldCreator.generateStructures(worldMap, 1.2);

// Distribute biomes
const biomes = worldCreator.distributeBiomes(100, 100, {
    'Plains': 0.4,
    'Forest': 0.4,
    'Desert': 0.2
});
```

## Configuration Options

### WorldCreationOptions

- `name`: World name
- `difficulty`: DifficultyEnum value
- `width`/`height`: World dimensions (optional)
- `biomeDistribution`: Biome distribution weights (optional)
- `structureDensity`: Structure placement density (optional)
- `terrainComplexity`: Terrain feature complexity (optional)
- `environmentVariation`: Environmental variation level (optional)

### Difficulty-Based Defaults

| Difficulty | World Size | Structures | Terrain | Dungeons |
|------------|------------|------------|---------|----------|
| Easy       | 50x50      | High       | Simple  | 3        |
| Medium     | 75x75      | Medium     | Moderate| 5        |
| Hard       | 100x100    | Low        | Complex | 7        |
| Legendary  | 150x150    | Very Low   | Very Complex | 10   |

## Integration

### With Existing Systems

The library integrates with:

- **World Class**: Extends the existing world management
- **Biomes Class**: Uses existing biome definitions and generation
- **Dungeon Class**: Places entrances that link to dungeon generation
- **Utilities Class**: Leverages existing random generation utilities

### Exports

```typescript
// Main classes
export { WorldCreator } from './lib/world/WorldCreator';
export { createWorld, getWorldCreationRecommendations } from './gameLoop/world/worldCreation';

// Types
export { 
    WorldCreationOptions, 
    WorldMap, 
    TerrainFeature, 
    Structure, 
    Environment 
} from './types/worldTypes/WorldCreation';
```

## Testing

Run the test to see the library in action:

```typescript
import { testWorldCreation } from "./test/worldCreationTest";
testWorldCreation();
```

The test demonstrates:
- Basic world generation
- Factory function usage
- Individual component generation
- Different difficulty levels

## Architecture

### Files Created

1. `src/types/worldTypes/WorldCreation.ts` - Type definitions
2. `src/lib/world/WorldCreator.ts` - Main world creation class
3. `src/gameLoop/world/worldCreation.ts` - Factory functions
4. `src/test/worldCreationTest.ts` - Testing utilities

### Design Principles

- **Minimal Changes**: Integrates with existing code without modification
- **Modular**: Each component can be used independently
- **Configurable**: Extensive customization options
- **Scalable**: Difficulty-based scaling for all generation parameters
- **Realistic**: Biome clustering and intelligent structure placement