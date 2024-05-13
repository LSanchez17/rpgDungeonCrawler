import { interfaceConnection } from "./interfaceUtils";

export const whatItemToUse = (availableItems: string[]): Promise<string> => {
    return new Promise((resolve) => {
        const question = `What item do you want to use? \n ${availableItems.join('\n')} \n`
        
        interfaceConnection.question(question, (answer) => {
            resolve(answer.toLowerCase());
        });
    })
}

export const whatItemToInspect = (availableItems: string[]): Promise<string> => {
    return new Promise((resolve) => {
        const question = `What item do you want to inspect? \n ${availableItems.join('\n')} \n`
        
        interfaceConnection.question(question, (answer) => {
            resolve(answer.toLowerCase());
        });
    })
}

export const whatItemToDrop = (availableItems: string[]): Promise<string> => {
    return new Promise((resolve) => {
        const question = `What item do you want to drop? \n ${availableItems.join('\n')} \n`
        
        interfaceConnection.question(question, (answer) => {
            resolve(answer.toLowerCase());
        });
    })
}
