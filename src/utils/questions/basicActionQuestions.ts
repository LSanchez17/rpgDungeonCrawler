import { interfaceConnection } from "./interfaceUtils";

export const whatWillYouDo = (): Promise<string> => {
    return new Promise((resolve) => {
        interfaceConnection.question('What will you do? ', (answer) => {
            resolve(answer.toLowerCase());
        });
    })
}
