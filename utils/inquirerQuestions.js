const inquirer = require('inquirer')

const startingQuestions = async () => {
    const answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Start Game', 'Quit Game']
        }
    ]);

    return answer.action === 'Start Game';
}

const worldCreation = async () => {
    const world = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your world\'s name?'
        },
        {
            type: 'checkbox',
            name: 'biome',
            message: 'What biome does your world contain?',
            choices: ['Forest', 'Desert', 'Ocean', 'Mountains', 'Plains', 'Swamp']
        },
        {
            type: 'list',
            name: 'difficulty',
            message: 'What difficulty is your world?',
            choices: ['Easy', 'Medium', 'Hard', 'Legendary']
        }
    ]);

    return world;
}

const characterCreation = async () => {
    const character = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your character\'s name?'
        },
        {
            type: 'list',
            name: 'class',
            message: 'What class are you?',
            choices: ['Warrior', 'Mage', 'Rogue']
        }
    ]);

    return character;
}

export default { startingQuestions, characterCreation, worldCreation }