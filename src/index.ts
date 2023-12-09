import { mainMenu, characterCreation, worldCreation } from './utils/inquirerQuestions';
import { entropyEngine } from './utils/entropyEngine';

const gameLoop = async () => {
    const menuOptionPicked = await mainMenu();

    if (menuOptionPicked) {
        console.log('Starting game...');

        const worldProperties = worldCreation();
        const characterProperties = characterCreation();
        
        entropyEngine(worldProperties, characterProperties);
    } else {
        console.log('Quitting game...');
        return;
    }
}


gameLoop();