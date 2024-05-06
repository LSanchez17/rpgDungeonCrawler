import { CharacterInterface, WorldInterface } from "../../types";
import { dungeonCreation } from "./dungeons";

export const gameLoop = (world: WorldInterface, character: CharacterInterface) => {
    const dungeon = dungeonCreation(world.getDifficulty());

    dungeon.enterDungeon(character);
    console.log(character.getCurrentRoom().getType());
}