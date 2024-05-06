import { 
    mainMenu, 
    isValidStartGameOption,
    isValidDifficultyOption,
    enterCharacterName, 
    enterDifficulty, 
    enterWorldName,
    entropyEngine,
    characterCreation
} from './utils';
import { ValidMainMenuOptions } from './types/chatTypes';

const startGame = async () => {
    const startMenu = async () => {
        let mainMenuInput = await mainMenu();
        let validUserInput = isValidStartGameOption(mainMenuInput);

        if (!validUserInput) {
            console.log('Invalid input. Please enter a valid input.');
            startMenu();
        }

        if (mainMenuInput === ValidMainMenuOptions.N || mainMenuInput === ValidMainMenuOptions.No) {
            console.log('Goodbye!');
            process.exit();
        }

    }

    const createGameBasics = async () => {
        const difficulty = await enterDifficulty();
        
        if (!difficulty) {
            console.log('Invalid input. Please enter a valid input.');
            createGameBasics();
        }
        
        if (!isValidDifficultyOption(difficulty)) {
            console.log('Invalid input. Please enter a valid input.');
            createGameBasics();
        }

        const characterName = await enterCharacterName();
        const worldName = await enterWorldName();

        return { difficulty, characterName, worldName };
    }


    await startMenu();
    const { difficulty, characterName, worldName } = await createGameBasics(); 

    const world = entropyEngine({difficulty, worldName});
    const character = characterCreation(characterName)

    return { world, character }
}


startGame().then(({world, character}) => {
    console.log('Game has started! ', world, character)
})