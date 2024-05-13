import * as readline from 'readline';

export const interfaceConnection = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});