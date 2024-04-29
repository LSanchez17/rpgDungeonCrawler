import * as readline from 'readline';

const interfaceConnection = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const mainMenu = (): Promise<string> => {
    return new Promise((resolve) => {
        interfaceConnection.question('Would you like to start the game? (y/n): ', (answer) => {
            resolve(answer);
        });
    })
}
