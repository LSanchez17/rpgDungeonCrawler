import { interfaceConnection } from "./interfaceUtils";

export const whatWillYouDo = (): Promise<string> => {
    return new Promise((resolve) => {
        const question = `What will you do? \n 1. Move Forward \n 2. Search Room \n 3. Check Inventory \n 4. Check Stats \n 5. Rest \n 6. Exit Game \n`
        
        interfaceConnection.question(question, (answer) => {
            resolve(answer.toLowerCase());
        });
    })
}

export const pressAnyKeyToContinue = (): Promise<string> => {
    return new Promise((resolve) => {
        const question = `Press any key to continue... \n`
        
        interfaceConnection.question(question, (answer) => {
            resolve(answer.toLowerCase());
        });
    })
}

export const foundItemQuestion = (item: string): Promise<string> => {
    return new Promise((resolve) => {
        const question = `You found a ${item}. Do you want to pick it up? \n 1. Yes \n 2. No \n`
        
        interfaceConnection.question(question, (answer) => {
            resolve(answer.toLowerCase());
        });
    })
}

export const whatStatToIncrease = ():Promise<string> => {
    return new Promise((resolve) => {
        const question = `What stat do you want to increase? \n 1. Health \n 2. Attack \n 3. Defense \n 4. Speed `

        interfaceConnection.question(question, (answer) => {
            resolve(answer.toLowerCase());
        });
    })
}

export const battleActions = (): Promise<string> => {
    return new Promise((resolve) => {
        const question = `What will you do? \n 1. Attack \n 2. Use Item \n 3. Run Away \n`

        interfaceConnection.question(question, (answer) => {
            resolve(answer.toLowerCase());
        });
    })
}