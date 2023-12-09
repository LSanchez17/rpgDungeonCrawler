import { prompt, select } from '@inquirer/prompts';

export const mainMenu = async () => {
    const answer = await select({
        message: 'What would you like to do?',
        choices: [
            {
                name: 'Start Game',
                value: 'start',
                description: 'Start a new game'
            },
            {
                name: 'Quit Game',
                value: 'quit',
                description: 'Quit the game'
            }
        ]
    });
    
    return answer.action === 'start';
}

/**
 * Asks user questions about the world they want to create
 * name, difficulty
 * 
 * @returns {worldName: string, difficulty: string}
 */
export const worldCreation = async () => {
    const worldName = await prompt({
        message: 'What is your world\'s name?',
    });

    const worldDifficulty = await select({
        message: 'What would you like to do?',
        choices: [
            {
                name: 'Easy',
                value: 'Easy',
                description: 'Easy'
            },
            {
                name: 'Medium',
                value: 'Medium',
                description: 'Medium'
            },
            {
                name: 'Hard',
                value: 'Hard',
                description: 'Hard'
            },
            {
                name: 'Legendary',
                value: 'Legendary',
                description: 'Legendary'
            }
        ]
    });

    return {worldName, worldDifficulty};
}

/**
 * Asks the user questions about the character they want to create
 * name, class
 * 
 * @returns {characterName: string, characterClass: string}
 */
export const characterCreation = async () => {
    const characterName = await prompt({
        message: 'What is your character\'s name?',
    });

    const characterClass = await select({
        message: 'What would you like to do?',
        choices: [
            {
                name: 'Warrior',
                value: 'Warrior',
                description: 'Warrior'
            },
            {
                name: 'Mage',
                value: 'Mage',
                description: 'Mage'
            },
            {
                name: 'Rogue',
                value: 'Rogue',
                description: 'Rogue'
            }
        ]
    });

    return {characterName, characterClass};
}