import * as readline from 'readline';

import { capitalizeFirstLetterOfWord } from './textEntryUtils';

const interfaceConnection = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const mainMenu = (): Promise<string> => {
    return new Promise((resolve) => {
        interfaceConnection.question('Would you like to start the game? (y/n): ', (answer) => {
            resolve(capitalizeFirstLetterOfWord(answer.toLowerCase()));
        });
    })
}

export const enterCharacterName = (): Promise<string> => {
    return new Promise((resolve) => {
        interfaceConnection.question('Enter your character name: ', (answer) => {
            resolve(answer);
        });
    })
}


export const enterDifficulty = (): Promise<string> => {
    return new Promise((resolve) => {
        interfaceConnection.question('Enter the difficulty of the game (Easy, Medium, Hard, Legendary): ', (answer) => {
            resolve(capitalizeFirstLetterOfWord(answer.toLowerCase()));
        });
    })
}

export const enterWorldName = (): Promise<string> => {
    return new Promise((resolve) => {
        interfaceConnection.question('Enter the name of your world: ', (answer) => {
            resolve(answer);
        });
    })
}