import { mainMenu, enterCharacterName, enterDifficulty, enterWorldName } from './utils/startingQuestions';
import { entropyEngine } from './utils/entropyEngine';
import { isValidStartGameOption } from './utils/textEntryUtils';
import { ValidMainMenuOptions } from './types/chatTypes';

const gameLoop = async () => {
    let mainMenuInput = await mainMenu();
    let validUserInput = isValidStartGameOption(mainMenuInput);

    if (!validUserInput) {
        console.log('Invalid input. Please enter a valid input.');
        gameLoop();
    }

    if (mainMenuInput === ValidMainMenuOptions.N || mainMenuInput === ValidMainMenuOptions.No) {
        console.log('Goodbye!');
        process.exit();
    }

    const characterName = await enterCharacterName();
    const difficulty = await enterDifficulty();
    const createWorldName = await enterWorldName();

    console.log(`\n
        Your character name is: ${characterName}
        \n
        Your difficulty is: ${difficulty}
        \n
        Your world name is: ${createWorldName}`)
}


gameLoop();