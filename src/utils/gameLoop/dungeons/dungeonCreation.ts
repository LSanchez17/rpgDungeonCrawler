import { Dungeon } from "../../../lib/layouts/Dungeon";
import { DifficultyEnum } from "../../../types";

export const dungeonCreation = (difficulty: DifficultyEnum): Dungeon => {
    const newDungeon = new Dungeon();

    newDungeon.generateDungeon(difficulty);

    return newDungeon;
}