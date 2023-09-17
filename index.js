const { startingQuestions, characterCreation, worldCreation } = require('./utils/inquirerQuestions');
const { instanstiateGame } = require('./utils/entropyEngine');

const gameLoop = async () => {
    const startsGame = await startingQuestions();

    if (startsGame) {
        console.log('Starting game...');

        const worldProperties = worldCreation();
        const characterProperties = characterCreation();
        
        instanstiateGame(worldProperties, characterProperties);
        instantiageMonsters();
    } else {
        console.log('Quitting game...');
        return;
    }
}


gameLoop();