import { World } from "../lib/world/World";
import { DifficultyEnum } from "../types";

interface EntropyEngineInterface {
    difficulty: string;
    worldName: string;
}

/**
 * Contains the logic to create chaos within a game, world, characters, items, monsters, etc
 */
export const entropyEngine = ({ difficulty, worldName}: EntropyEngineInterface) => {
    console.log('Creating world...');

    const world = new World(worldName, DifficultyEnum[difficulty]);
    world.setBaseEntropy();

    return world;
}
